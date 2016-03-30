$('document').ready(function() {
    new WOW({ live: true }).init();
    var actingTimeline = [{
        year: 1949,
        title: 'NTR\'s Debut Film',
        films: [{
            name: 'Mana Desam',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Mana_Desam.png/220px-Mana_Desam.png',
            link: 'https://en.wikipedia.org/wiki/Mana_Desam'
        }]
    }, {
        year: 1950,
        title: 'Films in 1950',
        films: [{
            name: 'Shavukaru',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/81/Shavukaru.jpg',
            link: 'https://en.wikipedia.org/wiki/Shavukaru'
        }, {
            name: 'Palletoori Pilla',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/64/Palletoori_Pilla.jpg/220px-Palletoori_Pilla.jpg',
            link: 'https://en.wikipedia.org/wiki/Palletoori_Pilla'
        }, {
            name: 'Samsaram',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Samsaram_1950.jpg/220px-Samsaram_1950.jpg',
            link: 'https://en.wikipedia.org/wiki/Samsaram_(1950_film)'
        }]
    }, {
        year: 1951,
        title: 'Films in 1951',
        films: [{
            name: 'Pathala Bhairavi',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Pathala_Bhairavi.jpg/220px-Pathala_Bhairavi.jpg',
            link: 'https://en.wikipedia.org/wiki/Pathala_Bhairavi'
        }, {
            name: 'Malliswari',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Malliswari_1951.JPG/220px-Malliswari_1951.JPG',
            link: 'https://en.wikipedia.org/wiki/Malliswari_(1951_film)'
        }]
    }].reverse();
    for (var i = 0; i < actingTimeline.length; i++) {
        var item = actingTimeline[i];
        var el = '<div class="timeline-item wow zoomIn">' + '<div class="timeline-icon">' + item.year + '</div>';
        el += '<div class="timeline-content ' + (i % 2 === 0 ? '' : 'right') + '">';
        el += '<h2>' + item.title + '</h2>';
        el += '<div class="card-container">';
        console.log(item);
        for (var j = 0; j < item.films.length; j++) {
            var film = item.films[j];
            el += '<a href="' + film.link + '"target="_blank" class="card">';
            el += '<div class="card-img"><img src="' + film.imageUrl + '"" alt="' + film.name + '_img" /></div><div class="card-info">' + film.name + '</div></a>';
        }
        el += '</div>';
        if (item.awards) {
            el += '<div class="awards-container"><h3>Awards:</h3><ul>';
            for (var k = 0; k < item.awards.length; k++) {
                var award = item.awards[k];
                el += '<li>' + award.name + '<a href="' + award.link + '">' + award.for+'</a></li>';
            }
            el += '</ul></div>';
        }
        el += '</div></div>';
        console.log(el);
        $("#acting").after($(el));
    }

});
