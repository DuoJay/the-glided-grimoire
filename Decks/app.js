'use strict';
let data, legacyData, outcomes, cardArt = {}, activeDeck='beast', history=[], selected=[null,null], recorded=false, player='', page='ritual', dm=false, editing=null, busy=false, storageOK=true;
const $=s=>document.querySelector(s), esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])), labels={P:'Standard positive',E:'Exceptional',N:'Negative'}, glyphs=['◉','♞','✦','⚙','♱','♜','❖','♧','✧','♆','♟','♙','♢','☾','♠','◈','❧','☠','⋔','♣','☥','◎'];
const decks = {
  beast: { name: 'Beast', symbol: '♞', edition: 'Revision 5 · D&D 2024' },
  artifacts: { name: 'Artifact', symbol: '⚔', edition: 'D&D 2024' },
  wonder: { name: 'Wonder', symbol: '✦', edition: 'D&D 2024' }
};

function switchDeck(key) {
  activeDeck = key;
  data = decks[key].data;
  outcomes = decks[key].outcomes;
  selected = [null, null];
  recorded = false;
  render();
}

function deckPicker() {
  return `<div class="decks" role="group" aria-label="Choose a deck">${Object.entries(decks).map(([key, deck]) => `
    <button type="button" class="deck ${key===activeDeck?'selected':''}" data-deck="${key}"
      aria-pressed="${key===activeDeck}" ${deck.data?'':'disabled'}>
      <span class="symbol" aria-hidden="true">${deck.symbol}</span>
      <span><strong>${deck.name}</strong><span>${deck.data?'22 CARDS · 231 OUTCOMES':'COMING LATER'}</span></span>
    </button>`).join('')}</div>`;
}

function bookReference(pages, name, heading, book, directory) {
  if (!pages?.length) return '';
  const label = pages.length === 1 ? 'p.' : 'pp.';
  return `<details class="dmg-reference">
    <summary>${esc(heading)} · ${label} ${esc(pages.join(', '))}</summary>
    ${pages.map(page => `<figure>
      <a href="${directory}/${page}.webp" target="_blank" rel="noopener" aria-label="Open ${esc(book)} page ${page} at full size">
        <img src="${directory}/${page}.webp" loading="lazy" alt="${esc(book)}, page ${page}, source for ${esc(name)}">
      </a>
      <figcaption>${esc(book)}, p. ${page} · Open image at full size</figcaption>
    </figure>`).join('')}
  </details>`;
}

function dmgReference(pages, name, heading = 'Full DMG description') {
  return bookReference(pages, name, heading, 'Dungeon Master’s Guide (2024)', 'dmg');
}

function rulesReferences(groups) {
  if (!groups?.length) return '';
  return `<details class="rules-references">
    <summary>Rules and source references</summary>
    ${groups.map(group => `<div class="rules-reference-group">
      <strong>${esc(group.title)}</strong>
      ${group.links?.length ? `<ul>${group.links.map(link => `
        <li>${link.url ? `<a href="${esc(link.url)}" target="_blank" rel="noopener">${esc(link.label)} ↗</a>` : ''}
          ${link.book === 'phb'
            ? bookReference(link.pages, link.label, `${link.label} · PHB 2024`, 'Player’s Handbook (2024)', 'phb')
            : bookReference(link.pages, link.label, `${link.label} stat block`, 'Monster Manual (2024)', 'mm')}
        </li>`).join('')}</ul>` : ''}
      ${dmgReference(group.pages, group.title, 'DMG 2024 reference')}
    </div>`).join('')}
  </details>`;
}

function outcomeReferences(entry) {
  const source = data.entries.find(candidate => candidate.number === entry.number);
  return rulesReferences(source?.rulesReferences);
}

function publishedItemDetails(item) {
  const properties = [item.item_type, item.rarity].filter(Boolean);
  if (item.attunement === true) properties.push('Requires attunement');
  if (item.attunement === false) properties.push('No attunement required');
  const reference = [item.source, item.source_page ? `p. ${item.source_page}` : ''].filter(Boolean).join(', ');
  return `<li><strong>${esc(item.name)}</strong>
    <div>${esc(properties.join(' · '))}</div>
    ${reference ? `<div>${esc(reference)}</div>` : ''}
    ${item.catalog_description ? `<div>${esc(item.catalog_description)}</div>` : ''}
    ${dmgReference(item.dmgPages, item.name)}
  </li>`;
}

function itemDetails(entry) {
  if (activeDeck !== 'artifacts') return '';
  // Published references come from the deck so existing browser saves gain the new details.
  const reference = data.entries.find(item => item.number === entry.number);
  const publishedItems = reference?.publishedItems ?? [];
  return `<div class="item-details">
    ${entry.rarity ? `<span class="badge">${esc(entry.rarity)}</span>` : ''}
    ${entry.homebrew && entry.rarity !== 'Homebrew' ? '<span class="badge">Homebrew</span>' : ''}
    ${publishedItems.length ? `<ul class="published-items">${publishedItems.map(publishedItemDetails).join('')}</ul>` : ''}
    ${dmgReference(reference?.dmgPages, entry.title)}
    ${entry.sourceNote && !publishedItems.length ? `<p><strong>Source</strong> ${esc(entry.sourceNote)}</p>` : ''}
    ${entry.review && entry.reviewReasons ? `<p class="review">${esc(entry.reviewReasons)}</p>` : ''}
  </div>`;
}

function wonderDetails(entry) {
  if (activeDeck !== 'wonder') return '';
  const reference = data.entries.find(item => item.number === entry.number);
  const spell = entry.spellLevel === '' ? entry.spell : `${entry.spell} (level ${entry.spellLevel})`;
  const details = [
    ['Spell', spell],
    ['Published feature', entry.publishedFeature],
    ['Removal', entry.removal],
    ['Adventure cure', entry.questCure],
    ['Source', entry.sourceNote]
  ];
  return `<div class="item-details">
    ${entry.severity ? `<span class="badge N">${esc(entry.severity)}</span>` : ''}
    ${details.filter(([, value]) => value).map(([label, value]) =>
      `<p><strong>${label}</strong> ${esc(value)}</p>`).join('')}
    ${dmgReference(reference?.dmgPages, entry.publishedFeature || entry.title)}
  </div>`;
}

function read(k,f){try{return JSON.parse(localStorage.getItem('domt-'+k))??f}catch{storageOK=false;return f}}function save(){try{localStorage.setItem('domt-outcomes',JSON.stringify(decks.beast.outcomes));localStorage.setItem('domt-artifacts',JSON.stringify(decks.artifacts.outcomes));localStorage.setItem('domt-wonder',JSON.stringify(decks.wonder.outcomes));localStorage.setItem('domt-revision','5');localStorage.setItem('domt-history',JSON.stringify(history));localStorage.setItem('domt-player',JSON.stringify(player))}catch{storageOK=false;toast('Browser storage unavailable. Export a backup before leaving.')}}
function toast(t){$('#toast').textContent=t;$('#toast').style.display='block';setTimeout(()=>$('#toast').style.display='none',4000)}
function valid(rows, deck=data){return Array.isArray(rows)&&rows.length===deck.entries.length&&rows.every(e=>e&&typeof e==='object')&&new Set(rows.map(e=>e.number)).size===rows.length&&rows.every(e=>{const o=deck.entries.find(x=>x.number===e.number);return o&&o.a===e.a&&o.b===e.b&&e.pair===o.pair&&['P','E','N'].includes(e.type)&&typeof e.description==='string'&&e.description.trim()&&typeof e.review==='boolean'&&typeof e.notes==='string'})}
function migrateLegacy(rows){const beast=decks.beast.data;if(!valid(rows,beast))return structuredClone(beast.entries);return beast.entries.map(base=>{const row=rows.find(e=>e.number===base.number),old=legacyData.entries.find(e=>e.number===base.number);const prior=legacyData.priorEntries?.find(e=>e.number===base.number);const changed=['type','description','notes'].filter(k=>row[k]!==old[k]&&(!prior||row[k]!==prior[k]));if(!changed.length)return structuredClone(base);const merged=structuredClone(base);for(const key of changed)merged[key]=row[key];if(changed.includes('description')){merged.title='DM outcome';merged.review=true;merged.referenceNote='Preserved DM edit from the earlier draft. Compare with Revision 5 before play.';}merged.custom=true;return merged;})}
function permanent(e){return e.type==='N'&&/Permanent\s*[—–-]\s*Cannot Be Cured/i.test(e.description)}
function annotations(e){return `${e.custom?'<span class="badge custom">DM override</span>':''}${permanent(e)?'<p class="permanent">Permanent — Cannot Be Cured. Remove Curse does not end this effect.</p>':''}${e.referenceNote?`<p class="reference-note">${esc(e.referenceNote)} <a href="${esc(data.statBlockSource)}" target="_blank" rel="noopener">Official 2024 index ↗</a></p>`:''}`}
function showRules(){const d=document.createElement('dialog');d.className='rules-dialog';d.innerHTML=`<span class="eyebrow">${decks[activeDeck].name}${activeDeck==='beast'?' · Revision 5':''}</span><h2>The table rules</h2><p class="muted">Draw your cards in real life, then select them here. Lookups are not recorded automatically.</p>${data.rules.map(r=>`<section><h3>${esc(r.title)}</h3><p>${esc(r.text)}</p></section>`).join('')}${rulesReferences(data.rulesReferences)}<button class="gold">Close rules</button>`;document.body.append(d);d.querySelector('button').onclick=()=>{d.close();d.remove()};d.showModal()}
function badge(e){return `<span class="badge ${e.type}">${labels[e.type]}</span>`}function counts(){return outcomes.reduce((o,e)=>(o[e.type]++,o),{P:0,N:0,E:0})}
function render(){document.querySelectorAll('.nav').forEach(b=>b.classList.toggle('active',b.dataset.page===page));$('#dm').classList.toggle('on',dm);$('#count').textContent=history.length;$('#app').innerHTML=page==='ritual'?ritualView():page==='library'?libraryView():historyView();bind();}
function selectedOutcome(){if(selected.some(x=>x===null)||selected[0]===selected[1])return null;const [a,b]=[...selected].sort((a,b)=>a-b);return outcomes.find(e=>e.a===a&&e.b===b)}
function cardFace(name, id) {
  const artwork = cardArt[name];
  if (!artwork) {
    return `<div class="reference-card ${name?'':'unselected'}" aria-hidden="true">
      <span class="tiny">${esc(decks[activeDeck].name)}</span>
      <span class="creature">${name?glyphs[id]:'✧'}</span>
      <h3>${esc(name || 'Select a card')}</h3>
    </div>`;
  }
  const framing = `--art-width:${artwork.width}%;--art-left:${artwork.left}%;--art-height:${artwork.height}%;--art-top:${artwork.top}%;--art-ratio:${artwork.ratio}`;
  return `<figure class="illustrated-card" style="${framing}">
    <div class="card-art-window"><img src="${esc(artwork.path)}" alt="" decoding="async"></div>
    <figcaption>${esc(name)}</figcaption>
  </figure>`;
}

function cardSelector(slot) {
  const id = selected[slot];
  const other = selected[1-slot];
  const name = id === null ? '' : data.names[id];
  return `<div class="card-choice">
    <label for="select${slot}">${slot===0?'First physical card':'Second physical card'}</label>
    <select id="select${slot}">
      <option value="">Choose a card…</option>
      ${data.names.map((option,i)=>`<option value="${i}" ${id===i?'selected':''} ${other===i?'disabled':''}>${esc(option)}</option>`).join('')}
    </select>
    ${cardFace(name,id)}
  </div>`;
}
function ritualView(){const e=selectedOutcome(),c=counts();return `<section class="intro"><div class="eyebrow">YOUR TABLE. YOUR CARDS. YOUR FATE.</div><h1>Draw at the table. <em>Find your fate.</em></h1><p>Select the two cards drawn from your physical deck.<br>Look up their predetermined outcome, in either order.</p>${deckPicker()}</section><div class="ritual-layout"><section class="table" aria-label="Physical card outcome lookup"><div class="tabletop"><span>${decks[activeDeck].name}</span><span>✦ &nbsp; OUTCOME REFERENCE</span></div><div class="cards reference-cards">${cardSelector(0)}${cardSelector(1)}</div><div class="lookup-actions"><button id="swap" class="quiet" ${selected.some(x=>x===null)?'disabled':''}>⇄ Swap cards</button><button id="resetpair" class="quiet" ${selected.every(x=>x===null)?'disabled':''}>Clear selection</button></div><p class="step">${e?'Your pairing is written below.':'Choose two different cards to see their outcome.'}</p><div id="result" aria-live="polite">${e?outcomeView(e):''}</div>${e?`<button id="record" class="gold" ${recorded?'disabled':''}>${recorded?'✓ Saved to draw history':'Record physical draw →'}</button><p class="muted">Looking up a pair does not add it to history. Record only actual draws.</p>`:'<p class="muted">Use the cards drawn in real life. Card order does not change the result.</p>'}</section><aside><div class="panel"><span class="eyebrow">AT YOUR TABLE</span><h3>Whose draw is this?</h3><label for="player">Character or player name (optional)</label><input id="player" maxlength="80" placeholder="e.g. Thorne, the reckless" value="${esc(player)}"><ul class="rules"><li>Draw two different cards from your physical ${decks[activeDeck].name} deck.</li><li>Select their names to look up the single fixed outcome.</li><li>Optionally record the draw for your campaign ledger.</li></ul><button id="rules" class="textlink">Read the table rules ↗</button></div><div class="panel"><span class="eyebrow">A WORLD OF POSSIBILITIES</span><div class="summary"><div><strong>22</strong><span>CARDS</span></div><div><strong>231</strong><span>PAIRINGS</span></div><div><strong>1</strong><span>FATE</span></div></div><p>${c.P} standard · ${c.E} exceptional · ${c.N} negative.${decks[activeDeck].edition?'<br>'+decks[activeDeck].edition:''}</p><button class="textlink" id="browse">Explore the outcome library →</button></div></aside></div>`}
function outcomeView(e){return `<article class="outcome">${badge(e)}<h2>${esc(e.title||e.pair)}</h2><div class="eyebrow">${esc(e.pair)} · #${e.number}</div><p class="mechanics">${esc(e.description)}</p>${annotations(e)}${itemDetails(e)}${wonderDetails(e)}${outcomeReferences(e)}${e.review?'<div class="review">◇ DM review required before resolving.</div>':''}${dm&&e.notes?`<p><b>DM notes:</b> ${esc(e.notes)}</p>`:''}<button class="textlink outcome-rules">${activeDeck==='beast'?'Deck rules & save DC ↗':'Deck rules ↗'}</button>${dm?` <button class="quiet" data-edit="${e.number}">Edit outcome</button>`:''}</article>`}
function libraryView(){const c=counts();return `<section class="page"><h1>${decks[activeDeck].name} card library</h1>${deckPicker()}<p class="muted">231 pairings · ${c.P} positive · ${c.E} exceptional · ${c.N} negative</p>${dm?'<p class="review">DM mode lets you edit outcomes. Edits and history are saved in this browser.</p><div class="toolbar"><button class="quiet" id="export">Export campaign backup ↓</button><button class="quiet" id="import">Import backup ↑</button><input hidden type="file" id="file" accept="application/json"></div>':''}<div class="toolbar"><input type="search" id="search" placeholder="Search cards or outcome mechanics…" aria-label="Search outcomes"><select id="filter" aria-label="Outcome category"><option value="">All outcomes</option><option value="P">Standard positive</option><option value="E">Exceptional</option><option value="N">Negative</option><option value="review">Needs review</option><option value="permanent">Permanent negatives</option><option value="custom">DM overrides</option></select></div><p class="muted" id="shown"></p><div id="entries" class="library-list"></div></section>`}
function list(){const q=$('#search').value.toLowerCase(),f=$('#filter').value;const rows=outcomes.filter(e=>(e.pair+' '+(e.title||'')+' '+e.description+' '+(e.items||[]).join(' ')+' '+[e.spell,e.publishedFeature,e.severity,e.removal,e.questCure].filter(Boolean).join(' ')).toLowerCase().includes(q)&&(!f||(f==='review'?e.review:f==='permanent'?permanent(e):f==='custom'?e.custom:e.type===f)));$('#shown').textContent=rows.length+' of 231 pairings';$('#entries').innerHTML=rows.map(e=>`<article class="entry"><div class="entrytop"><span class="eyebrow">${String(e.number).padStart(3,'0')}</span>${badge(e)}</div><h3>${esc(e.title||e.pair)}</h3><div class="eyebrow">${esc(e.pair)}</div><p class="mechanics">${esc(e.description)}</p>${annotations(e)}${itemDetails(e)}${wonderDetails(e)}${outcomeReferences(e)}${e.review?'<div class="review">◇ Needs DM review</div>':''}${dm?`<p>${esc(e.notes)}</p><button class="quiet" data-edit="${e.number}">Edit outcome ↗</button>`:''}<button class="quiet" data-lookup="${e.number}">Look up pair</button></article>`).join('')||'<div class="empty">No pairings match. Try another card or mechanic.</div>';bindEdits()}
function historyView(){return `<section class="page"><span class="eyebrow">THE CAMPAIGN LEDGER</span><h1>Fate leaves a trace.</h1><p class="muted">Recorded physical draws and previous entries, preserved with the outcome received. Saved in this browser.</p><div class="toolbar"><button class="quiet" id="export">Export campaign backup ↓</button>${dm&&history.length?'<button class="quiet" id="clearhistory">Clear history</button>':''}</div>${history.length?history.map(h=>`<article class="history-row"><time>${esc(new Date(h.time).toLocaleString())}</time><div><h3>${esc(h.player||'Unnamed adventurer')}</h3><span class="muted">${decks[h.deck]?.name||decks.beast.name} · ${esc(h.outcome.pair)} ${h.physical?' · Physical draw':h.override?' · Legacy DM staged draw':' · Legacy site draw'}</span><p>${esc(h.outcome.description)}</p>${h.outcome.review?'<span class="review">◇ Needs DM review</span>':''}</div>${badge(h.outcome)}</article>`).join(''):'<div class="empty">✧<h2>The ledger is waiting.</h2>Look up your physical cards and choose “Record physical draw” to add an entry.<p><button id="browseRitual" class="gold">Look up a pair →</button></p></div>'}</section>`}
function bindEdits(){document.querySelectorAll('.outcome-rules').forEach(b=>b.onclick=showRules);document.querySelectorAll('[data-edit]').forEach(b=>b.onclick=()=>openEdit(+b.dataset.edit));document.querySelectorAll('[data-lookup]').forEach(b=>b.onclick=()=>{const e=outcomes.find(x=>x.number===+b.dataset.lookup);selected=[e.a,e.b];recorded=false;page='ritual';render();})}
function openEdit(n){editing=n;const e=outcomes.find(x=>x.number===n);$('#editpair').textContent=e.pair;$('#etype').value=e.type;$('#edesc').value=e.description;$('#enotes').value=e.notes;$('#ereview').checked=e.review;$('#resetrevision').hidden=!e.custom;$('#editor').showModal()}
function exportData(){const blob=new Blob([JSON.stringify({schema:4,revision:5,outcomes:decks.beast.outcomes,artifacts:decks.artifacts.outcomes,wonder:decks.wonder.outcomes,history,player},null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='deck-of-many-things-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
function bind(){
  document.querySelectorAll('[data-deck]:not(:disabled)').forEach(button => {
    button.onclick = () => {
      if (button.dataset.deck !== activeDeck) switchDeck(button.dataset.deck);
    };
  });
  if($('#select0')){[0,1].forEach(slot=>$('#select'+slot).onchange=e=>{selected[slot]=e.target.value===''?null:Number(e.target.value);recorded=false;render()});$('#swap').onclick=()=>{selected.reverse();render()};$('#resetpair').onclick=()=>{selected=[null,null];recorded=false;render()};if($('#record'))$('#record').onclick=()=>{const e=selectedOutcome();if(!e||recorded)return;history.unshift({time:new Date().toISOString(),player:player.trim(),outcome:structuredClone(e),physical:true,deck:activeDeck});recorded=true;save();render();toast('Physical draw recorded.')};$('#player').oninput=e=>{player=e.target.value;save()};$('#browse').onclick=()=>{page='library';render()};$('#rules').onclick=showRules;}
if($('#search')){$('#search').oninput=list;$('#filter').onchange=list;list()}if($('#export'))$('#export').onclick=exportData;if($('#browseRitual'))$('#browseRitual').onclick=()=>{page='ritual';render()};if($('#clearhistory'))$('#clearhistory').onclick=()=>{if(confirm('Clear all draw history in this browser? Export a backup first if needed.')){history=[];save();render()}};if($('#import')){$('#import').onclick=()=>$('#file').click();$('#file').onchange=async e=>{try{const f=e.target.files[0];if(!f)return;if(f.size>5000000)throw Error();const v=JSON.parse(await f.text());if(!([1,2,3,4].includes(v.schema))||(v.schema>=2&&v.revision!==5)||!valid(v.outcomes,decks.beast.data)||(v.schema>=3&&!valid(v.artifacts,decks.artifacts.data))||(v.schema===4&&!valid(v.wonder,decks.wonder.data))||!Array.isArray(v.history)||v.history.some(h=>!h||!h.outcome||!['P','N','E'].includes(h.outcome.type)||typeof h.outcome.description!=='string'||typeof h.outcome.pair!=='string'||typeof h.time!=='string'||!Number.isFinite(Date.parse(h.time))))throw Error();if(confirm('Replace this browser’s outcomes and history with this backup?')){decks.beast.outcomes=v.schema===1?migrateLegacy(v.outcomes):v.outcomes;if(v.schema>=3)decks.artifacts.outcomes=v.artifacts;if(v.schema===4)decks.wonder.outcomes=v.wonder;outcomes=decks[activeDeck].outcomes;recorded=false;history=v.history;player=typeof v.player==='string'?v.player:'';save();render();toast('Campaign backup restored.')}}catch{toast('Invalid backup. Expected all 231 unique pairings and valid history.')}}}bindEdits();}
document.querySelectorAll('.nav').forEach(b=>b.onclick=()=>{if(!data||busy)return;page=b.dataset.page;render()});$('#dm').onclick=()=>{if(!data||busy)return;dm=!dm;render();if(dm)toast('DM mode enabled. Open Card library to edit outcomes.')};$('#closeedit').onclick=()=>$('#editor').close();$('#editform').onsubmit=e=>{e.preventDefault();const o=outcomes.find(x=>x.number===editing);if(!$('#edesc').value.trim())return;o.custom=true;o.type=$('#etype').value;o.description=$('#edesc').value.trim();o.notes=$('#enotes').value;o.review=$('#ereview').checked;save();$('#editor').close();render();toast('Outcome saved. Recorded history is unchanged.')};
$('#resetrevision').onclick=()=>{if(!confirm('Restore this outcome to the deck’s default? Your DM notes and recorded history will be kept.'))return;const i=outcomes.findIndex(e=>e.number===editing),notes=outcomes[i].notes;outcomes[i]={...structuredClone(data.entries.find(e=>e.number===editing)),notes};save();$('#editor').close();render();toast('Default outcome restored.')};
Promise.resolve().then(() => offlineDeckData).then(([d,legacy,artifacts,wonder,artwork])=>{cardArt=artwork;data=d;legacyData=legacy;decks.beast.data=d;decks.artifacts.data=artifacts;decks.wonder.data=wonder;const saved=read('outcomes',null),revision=read('revision',0);outcomes=valid(saved)?revision===5?saved:migrateLegacy(saved):structuredClone(data.entries);decks.beast.outcomes=outcomes;const artifactEdits=read('artifacts',null);decks.artifacts.outcomes=valid(artifactEdits,artifacts)?artifactEdits:structuredClone(artifacts.entries);const wonderEdits=read('wonder',null);decks.wonder.outcomes=valid(wonderEdits,wonder)?wonderEdits:structuredClone(wonder.entries);history=read('history',[]);if(!Array.isArray(history))history=[];player=read('player','');if(valid(saved)&&revision!==5){try{localStorage.setItem('domt-pre-r5-backup',JSON.stringify({schema:1,outcomes:saved,history,player}))}catch{storageOK=false}}save();render();if(!storageOK)toast('Browser storage unavailable. Export a backup to keep your changes.');else if(valid(saved)&&revision!==5)toast('Revision 5 loaded. Existing DM edits and history preserved.');}).catch(()=>{$('#app').innerHTML='<section class="page"><h1>The deck could not be opened.</h1><p>Extract the entire ZIP and open index.html from the extracted folder.</p></section>'});
