const srchbox = document.getElementById('inptbox')
const srchresult = document.getElementById('suggestions')

const countries = ['Sonorous', 'Fruits Basket', 'Doraemon', 'Toradora', 'Naruto', 'Cynosure', 'Darling in the Franxx', 'Anohana', 'Gintama', 'Made in Abyss', 'Quaint', 'Hokage', 'Ambrosia', 'Anime', 'Chibi', 'Elephant', 'Tangerine', 'Neko', 'Harem', 'Amber', 'Paranoia Agent', 'Bittersweet', 'Zephyr', 'Dappled', 'Sailor Moon', 'Bleach', 'Enigma', 'Zircon', 'One Piece', 'Placement is a Lie', 'Eloquent', 'Osu', 'Tokyo Ghoul', 'Serendipity', 'Kimetsu no Yaiba', 'Re:Creators', 'My Neighbor Totoro', 'Iridescent', 'Idol', 'Beelzebub', 'J-Rock', 'Tape', 'Hunter x Hunter', 'Mob Psycho 100', 'Kakigori', 'The Rising of the Shield Hero', 'My Hero Academia', "JoJo's Bizarre Adventure", 'Glue Stick', 'Illuminate', 'Ineffable', 'Up', 'JOTARO!', 'Death Note', 'Verdant', 'Mangaka', 'Noragami', "Howl's Moving Castle", 'Gundam', 'Sensei', 'Goblin Slayer', 'Your Name', 'Hikikomori', 'Galaxy', 'Kamehameha', 'Yandere', 'Black Clover', 'Nimbus', 'Isekai', 'Gargoyle', 'Husbando', 'Your Lie in April', 'Red', 'Japan', 'Kawaii', 'Petrichor', 'Quixotic', 'Quasar', 'Ephemeral', 'Cosplay', 'Erased', 'Horizon', '同性恋者', 'Moe', 'Fanart', 'Luminous', 'Never', 'Chota Bheem', 'Shonen', 'Sakura', 'Spirited Away', 'Fullmetal Alchemist', 'Tsundere', 'Dr. Stone', 'Demon Slayer', 'Nocturne', 'Utopia', 'Illustrious', 'Overlord', 'Resonance', 'You', 'Zeppelin', 'No Game No Life', 'Gonna', 'Love Live!', 'Overture', 'Quench', 'Promare', 'I wanna be the very best', 'Serial Experiments Lain', 'Labyrinth', 'Mecha', 'Attack on Titan', 'Mouse', 'Makoto Shinkai', 'Seinen', 'Ben 10', 'Cascade', 'Melancholy', 'Light Novel', 'The Promised Neverland', 'to catch them is my real test', 'Pinnacle', 'Whimsical', 'Re:Zero', 'Fujoshi', 'Ghibli', 'Evangelion', 'Genshin', 'Figurine', 'Castle in the Sky', 'Code Geass', 'Soliloquy', 'Penumbra', 'Chunibyo', 'The Devil is a Part-Timer!', 'Nebula', 'Solitude', 'Princess Mononoke', 'Serenade', 'Ohio', 'Jubilant', 'Vermilion', 'Ghost in the Shell', 'to train them is my cause', 'Death Parade', 'Nebulous', 'Violet Evergarden', 'A Silent Voice', 'Bishoujo', 'Onigiri', 'Kaleidoscope', 'Oracle', 'Give', 'Studio Ghibli', 'A Place Further than the Universe', 'Shojo', 'Panacea', 'Ethereal', 'Itasha', 'Symphony', 'like no one ever was', 'Fairy Tail', 'Cowboy Bebop', 'Doujinshi', 'Nendoroid', 'Cacophony', 'Tranquil', 'Sword Art Online', 'Mellifluous', 'One Punch Man', 'Haikyuu', 'Fontaine', 'Fate/Stay Night', 'Neon Genesis Evangelion', 'Fudanshi', 'Senpai', 'K-On!', 'Halcyon', 'Quintessence', 'Bishounen', 'Fire Force', 'Panorama', 'OVA', 'JIYUU-DA!!', 'Josei', 'Waifu', 'DIO!', 'Otaku', 'Weathering with You', 'Visual Novel', 'Incandescent', 'Manga', 'Fandub', 'Dragon Ball', 'Steins;Gate', 'Resplendent', 'Psycho-Pass', 'Lavender', 'Aids 💀', 'Clannad', 'Bing-chillin', 'J-Pop'];
srchbox.addEventListener('input', function() {
  const searchValue = this.value.toLowerCase();
  const filteredCountries = countries.filter(country => country.toLowerCase().includes(searchValue));
  displayResults(filteredCountries, searchValue);
});

function displayResults(results, searchValue) {
  srchresult.innerHTML = '';

  if (srchbox.value.trim() == '') {
    return;
  }
  results.forEach(result => {
    const li = document.createElement('li');
    const boldedResult = matchBold(result, searchValue);
    li.innerHTML = boldedResult;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';

    deleteButton.style.background = 'white';
    deleteButton.style.position = 'absolute';
    deleteButton.style.right = '1%'
    deleteButton.style.border = 'none';
    deleteButton.style.cursor = 'pointer';

    deleteButton.addEventListener('mouseenter', function() {
      deleteButton.style.color = 'blueviolet';
    });

    deleteButton.addEventListener('mouseleave', function() {
      deleteButton.style.color = ''; 
    });
    

    deleteButton.addEventListener('click', function() {
      deleteCountry(result);
    });

    li.appendChild(deleteButton);
    srchresult.appendChild(li);
  });
}

function matchBold(text, searchValue) {
  const characters = text.split('');
  const boldCharacters = characters.map(char => {
    const isMatch = searchValue.split('').includes(char.toLowerCase());
    return isMatch ? `<b style="background: white;">${char}</b>` : char;
  });
  
  return boldCharacters.join('');
  
}

function deleteCountry(country) {
  const index = countries.indexOf(country);
  if (index !== -1) {
    countries.splice(index, 1);
    displayResults([]);
  }
}

srchresult.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    srchbox.value = e.target.textContent;
    srchresult.innerHTML = '';
  }
});

document.addEventListener('click', function(e) {
  if (e.target !== srchbox && e.target !== srchresult) {
    srchresult.innerHTML = '';
  }
});
