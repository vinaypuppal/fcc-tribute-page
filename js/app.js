$('document').ready(function() {
    new WOW({ live: true }).init();

    var notify = function(message) {
          var $message = $('<p style="display:none;">' + message + '</p>');
          // console.log('reached');
          $('.notifications').append($message);
          $message.slideDown(300, function() {
            window.setTimeout(function() {
              $message.slideUp(300, function() {
                $message.remove();
              });
            }, 2000);
          });
        };

    var waypoint = new Waypoint({
      element: document.getElementById('acting'),
      handler: function() {
        notify('Click on movie thumbnails to know more about that movie');
        // console.log('Got It');
        this.destroy();
      }
    });

    var actingCareer = [{
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
    },{
        year:1952,
        title: 'Films in 1952',
        films:[{
            name:'Pelli Chesi Choodu',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Pelli_Chesi_Choodu.jpg/220px-Pelli_Chesi_Choodu.jpg',
            link: 'https://en.wikipedia.org/wiki/Pelli_Chesi_Choodu'
        },{
            name:'Palletooru',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Palletooru.jpg/220px-Palletooru.jpg',
            link:'https://en.wikipedia.org/wiki/Palletooru'
        }]
    },{
        year: 1954,
        title: 'Films in 1954',
        films:[{
            name:'Todu Dongalu',
            imageUrl:'',
            link:'https://en.wikipedia.org/wiki/Thodu_Dongalu_(1954_film)'
        },{
            name:'Rechukka',
            imageUrl:'data:image/jpeg;base64,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',
            link:'https://en.wikipedia.org/wiki/Rechukka'
        },{
            name:'Raju Peda',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Raju_peda_poster.jpg/220px-Raju_peda_poster.jpg',
            link:'https://en.wikipedia.org/wiki/Raju_Peda'
        },{
            name:'Parivartana',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Parivartana.jpg/220px-Parivartana.jpg',
            link:'https://en.wikipedia.org/wiki/Parivartana'
        }]
    },{
        year:1955,
        title: 'Films in 1955',
        films:[{
            name:'Missamma',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Missamma_poster.jpg/220px-Missamma_poster.jpg',
            link:'https://en.wikipedia.org/wiki/Missamma'
        },{
            name:'Kanyasulkam',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/3/38/Kanyasulkam.JPG',
            link:'https://en.wikipedia.org/wiki/Kanyasulkam_(film)'
        },{
            name:'Jayasimha',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Jayasimha.JPG/220px-Jayasimha.JPG',
            link:'https://en.wikipedia.org/wiki/Jayasimha_(1955_film)'
        }]
    },{
        year: 1956,
        title:"Films in 1956",
        films:[{
            name:'Tenali Ramakrishna',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Tenali_Ramakrishna.jpg/220px-Tenali_Ramakrishna.jpg',
            link:'https://en.wikipedia.org/wiki/Tenali_Ramakrishna_(film)'
        },{
            name:'Chiranjeevulu',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Chiranjeevulu.jpg/220px-Chiranjeevulu.jpg',
            link:'https://en.wikipedia.org/wiki/Chiranjeevulu'
        }]
    },{
        year: 1957,
        title: 'Films in 1957',
        films: [{
            name:'Vinayaka Chaviti',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Vinayaka_Chavithi_poster.jpg/220px-Vinayaka_Chavithi_poster.jpg',
            link:'https://en.wikipedia.org/wiki/Vinayaka_Chaviti'
        },{
            name:'Bhagya Rekha',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Bhagyarekha.jpg/220px-Bhagyarekha.jpg',
            link:'https://en.wikipedia.org/wiki/Bhagya_Rekha'
        },{
            name:'Sarangadhara',
            imageUrl:'data:image/jpeg;base64,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',
            link:'https://en.wikipedia.org/wiki/Sarangadhara'
        },{
            name:'Panduranga Mahatyam',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/e/ed/Panduranga_Mahatyam.jpg',
            link:'https://en.wikipedia.org/wiki/Panduranga_Mahatyam_(film)'
        },{
            name:'Mayabazar',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Mayabazar.jpg/220px-Mayabazar.jpg',
            link:'https://en.wikipedia.org/wiki/Mayabazar'
        }]
    },{
        year: 1958,
        title: "Films in 1958",
        films:[{
            name:'Bhookailas',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Bhookailas58.jpg/220px-Bhookailas58.jpg',
            link:'https://en.wikipedia.org/wiki/Bhookailas_(film)'
        }]
    },{
        year: 1959,
        title: "Films in 1959",
        films:[{
            name:'Raja Makutam',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Raja_Makutam.jpg/220px-Raja_Makutam.jpg',
            link:'https://en.wikipedia.org/wiki/Raja_Makutam'
        }]
    },{
        year: 1960,
        title: 'Films in 1960',
        films:[{
            name:'Bhatti Vikramarka',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Bhatti_Vikramarka_poster.jpg/220px-Bhatti_Vikramarka_poster.jpg',
            link:'https://en.wikipedia.org/wiki/Bhatti_Vikramarka'
        },{
            name:'Sri Venkateswara Mahatyam',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Sri_Venkateswara_Mahatyam_%281960%29.jpg/220px-Sri_Venkateswara_Mahatyam_%281960%29.jpg',
            link:'https://en.wikipedia.org/wiki/Sri_Venkateswara_Mahatyam'
        }]
    },{
        year: 1961,
        title: 'Films in 1961',
        films:[{
            name:'Jagadeka_Veeruni_Katha',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Jagadeka_Veeruni_Katha_poster.jpg/220px-Jagadeka_Veeruni_Katha_poster.jpg',
            link:'https://en.wikipedia.org/wiki/Jagadeka_Veeruni_Katha'
        },{
            name:'Seetharama_Kalyanam',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Seetha_Rama_Kalyanam_1961.jpg/220px-Seetha_Rama_Kalyanam_1961.jpg',
            link:'https://en.wikipedia.org/wiki/Seetharama_Kalyanam'
        }]
    },{
        year: 1963,
        title: 'Films in 1963',
        films:[{
            name:'Lava_Kusha',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/2/2c/Lava_Kusa.JPG',
            link:'https://en.wikipedia.org/wiki/Lava_Kusha'
        },{
            name:'Nartanasala',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/d/de/Nartanasala.jpg',
            link:'https://en.wikipedia.org/wiki/Nartanasala'
        }]
    },{
        year: 1964,
        title: 'Films in 1964',
        films:[{
            name:'Ramudu_Bheemudu',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Ramudu_Bheemudu.jpg/220px-Ramudu_Bheemudu.jpg',
            link:'https://en.wikipedia.org/wiki/Ramudu_Bheemudu'
        },{
            name:'Karnan',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Karnan_poster.jpg/220px-Karnan_poster.jpg',
            link:'https://en.wikipedia.org/wiki/Karnan_(film)'
        },{
            name:'Gudi_Gantalu',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Gudi_Gantalu.jpg/220px-Gudi_Gantalu.jpg',
            link:'https://en.wikipedia.org/wiki/Gudi_Gantalu'
        }]
    },{
        year: 1965,
        title: 'Films in 1965',
        films:[{
            name:'Pandava_Vanavasam',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Pandava_Vanavasam.jpg/220px-Pandava_Vanavasam.jpg',
            link:'https://en.wikipedia.org/wiki/Pandava_Vanavasam'
        }]
    }].reverse();

    for (var i = 0; i < actingCareer.length; i++) {
        var item = actingCareer[i];
        var el = '<div class="timeline-item wow zoomIn">' + '<div class="timeline-icon">' + item.year + '</div>';
        el += '<div class="timeline-content ' + (i % 2 === 0 ? '' : 'right') + '">';
        el += '<h2>' + item.title + '</h2>';
        el += '<div class="thumbnail-container">';
        // console.log(item);
        for (var j = 0; j < item.films.length; j++) {
            var film = item.films[j];
            el += '<a href="' + film.link + '"target="_blank" class="thumbnail">';
            el += '<div class="thumbnail-img"><img src="' + film.imageUrl + '"" alt="' + film.name + '_img" /></div><div class="thumbnail-info">' + film.name + '</div></a>';
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
        // console.log(el);
        $("#acting").after($(el));
    }

});
