import { type SearchResponse } from '../../apis/index.types';
import { type SimplifiedAudiobookObject } from '../../openapi';

export const searchAudiobooksFixture: SearchResponse = {
  audiobooks: {
    href: 'https://api.spotify.com/v1/search?query=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=audiobook&locale=en-US%2Cen%3Bq%3D0.9%2Cfr-FR%3Bq%3D0.8%2Cfr%3Bq%3D0.7%2Cja%3Bq%3D0.6&offset=0&limit=20',
    limit: 20,
    next: 'https://api.spotify.com/v1/search?query=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=audiobook&locale=en-US%2Cen%3Bq%3D0.9%2Cfr-FR%3Bq%3D0.8%2Cfr%3Bq%3D0.7%2Cja%3Bq%3D0.6&offset=20&limit=20',
    offset: 0,
    previous: null,
    total: 35,
    items: [
      {
        authors: [
          {
            name: 'Quincy Troupe',
          },
        ],
        available_markets: ['AU', 'CA', 'ET', 'GB', 'IE', 'NZ', 'US'],
        copyrights: [
          {
            text: 'Dreamscape Media 2002',
            type: 'C',
          },
        ],
        description:
          "Author(s): Quincy Troupe\nNarrator(s): Richard Allen\n\n<P>Quincy Troupe's account of his friendship with Miles Davis is a revealing portrait of a great musician and an intimate study of a unique relationship. It is also an engrossing chronicle of the author's own development, both artistically and personally. As Davis's collaborator on <i>Miles: The Autobiography,</i> Troupe&mdash;one of the major poets to emerge from the 1960&mdash;had exceptional access to the musician. This memoir goes beyond the life portrayed in the autobiography to describe Davis's spectacular creative processes and the joys and difficulties his passionate, contradictory temperament posed to the men's friendship. A keen and critical observer, Troupe captures and conveys the power of Miles's presence, the mesmerizing force of his personality, and the restless energy that lay at the root of his creativity.</p><p>Offering an unparalleled look at the act of creation and the forces behind it, Miles and Me reveals how the innovations of one person can inspire both those he knows and loves and the world at large.</p>",
        html_description:
          'Author(s): Quincy Troupe<br/>Narrator(s): Richard Allen<br/>&lt;P&gt;Quincy Troupe&#39;s account of his friendship with Miles Davis is a revealing portrait of a great musician and an intimate study of a unique relationship. It is also an engrossing chronicle of the author&#39;s own development, both artistically and personally. As Davis&#39;s collaborator on &lt;i&gt;Miles: The Autobiography,&lt;/i&gt; Troupe&amp;mdash;one of the major poets to emerge from the 1960&amp;mdash;had exceptional access to the musician. This memoir goes beyond the life portrayed in the autobiography to describe Davis&#39;s spectacular creative processes and the joys and difficulties his passionate, contradictory temperament posed to the men&#39;s friendship. A keen and critical observer, Troupe captures and conveys the power of Miles&#39;s presence, the mesmerizing force of his personality, and the restless energy that lay at the root of his creativity.&lt;/p&gt;&lt;p&gt;Offering an unparalleled look at the act of creation and the forces behind it, Miles and Me reveals how the innovations of one person can inspire both those he knows and loves and the world at large.&lt;/p&gt;',
        edition: 'Unabridged',
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/show/7pphqneQteN5KK8M84IvgB',
        },
        href: 'https://api.spotify.com/v1/audiobooks/7pphqneQteN5KK8M84IvgB',
        id: '7pphqneQteN5KK8M84IvgB',
        images: [
          {
            url: 'https://i.scdn.co/image/ab676663000022a83e06e13b487202be284d34e9',
            height: 640,
            width: 640,
          },
          {
            url: 'https://i.scdn.co/image/ab6766630000db5b3e06e13b487202be284d34e9',
            height: 300,
            width: 300,
          },
          {
            url: 'https://i.scdn.co/image/ab6766630000703b3e06e13b487202be284d34e9',
            height: 64,
            width: 64,
          },
        ],
        languages: ['English'],
        media_type: 'audio',
        name: 'Miles and Me',
        narrators: [
          {
            name: 'Richard Allen',
          },
        ],
        publisher: 'Dreamscape Media',
        type: 'audiobook',
        uri: 'spotify:show:7pphqneQteN5KK8M84IvgB',
        total_chapters: 9,
      } as SimplifiedAudiobookObject,
      {
        authors: [
          {
            name: 'Chris Murphy',
          },
        ],
        available_markets: ['AU', 'CA', 'ET', 'GB', 'IE', 'NZ', 'US'],
        copyrights: [
          {
            text: 'Blackstone Audio 2002',
            type: 'C',
          },
        ],
        description:
          'Author(s): Chris Murphy\nNarrator(s): Patrick Lawlor\n\n<p><em>Miles to Go</em> is a frank and intimate exploration of Miles Davis’ eccentric working life, drug habits, paranoia, depression, and subsequent recovery. Murphy explores Davis’ troubled relationship with his children and the controversial role Cicely Tyson played in his life. The book also delves into the dynamics that made Davis’ band work so well together, placing Davis’ work in a historic, literary, and musical framework.</p> <p>Willie Nelson, Mick Jagger, Jimi Hendrix, and even Mother Teresa all have walk-on parts in this engaging, intelligent, and often hilarious narrative. <em>Miles to Go</em> takes us from the small, seedy jazz clubs that Davis frequented to the world tours and then finally to Davis’ triumphant return with his celebrated concerts at Lincoln Center in the early 1980s.</p>',
        html_description:
          'Author(s): Chris Murphy<br/>Narrator(s): Patrick Lawlor<br/>&lt;p&gt;&lt;em&gt;Miles to Go&lt;/em&gt; is a frank and intimate exploration of Miles Davis’ eccentric working life, drug habits, paranoia, depression, and subsequent recovery. Murphy explores Davis’ troubled relationship with his children and the controversial role Cicely Tyson played in his life. The book also delves into the dynamics that made Davis’ band work so well together, placing Davis’ work in a historic, literary, and musical framework.&lt;/p&gt; &lt;p&gt;Willie Nelson, Mick Jagger, Jimi Hendrix, and even Mother Teresa all have walk-on parts in this engaging, intelligent, and often hilarious narrative. &lt;em&gt;Miles to Go&lt;/em&gt; takes us from the small, seedy jazz clubs that Davis frequented to the world tours and then finally to Davis’ triumphant return with his celebrated concerts at Lincoln Center in the early 1980s.&lt;/p&gt;',
        edition: 'Unabridged',
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/show/5o1amgsoFd47H9f8aTSqVF',
        },
        href: 'https://api.spotify.com/v1/audiobooks/5o1amgsoFd47H9f8aTSqVF',
        id: '5o1amgsoFd47H9f8aTSqVF',
        images: [
          {
            url: 'https://i.scdn.co/image/ab676663000022a832237e7b276b387f1e8c4e14',
            height: 640,
            width: 640,
          },
          {
            url: 'https://i.scdn.co/image/ab6766630000db5b32237e7b276b387f1e8c4e14',
            height: 300,
            width: 300,
          },
          {
            url: 'https://i.scdn.co/image/ab6766630000703b32237e7b276b387f1e8c4e14',
            height: 64,
            width: 64,
          },
        ],
        languages: ['English'],
        media_type: 'audio',
        name: 'Miles to Go: The Lost Years',
        narrators: [
          {
            name: 'Patrick Lawlor',
          },
        ],
        publisher: 'Blackstone Audio',
        type: 'audiobook',
        uri: 'spotify:show:5o1amgsoFd47H9f8aTSqVF',
        total_chapters: 33,
      } as SimplifiedAudiobookObject,
    ],
  },
};
