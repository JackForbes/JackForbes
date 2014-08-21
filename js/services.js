'use strict';

/* Services */
angular.module('myApp.services', []).
  service('SiteModel', [function() {
    return {
      navItems: [
        {
          href: '#Experience',
          text: 'Work Experience'
        },
        {
          href: '#Web-Dev',
          text: 'Web Development'
        },
        {
          href: '#Resume',
          text: 'Resume'
        },
        {
          href: '#Favourites',
          text: 'Favourites'
        },
        {
          href: '#Interests',
          text: 'Interests'
        }
      ],
      skills: [
        {
          label: 'Web Design',
          value: 100,
        },
        {
          label: 'UX',
          value: 100,
        },
        {
          label: 'Clean Code',
          value: 95,
        },
        {
          label: 'AngularJS',
          value: 90,
        },
        {
          label: 'JavaScript',
          value: 85,
        },
        {
          label: 'jQuery',
          value: 85,
        },
        {
          label: 'HTML5',
          value: 80,
        },
        {
          label: 'CSS3',
          value: 80,
        },
        {
          label: 'Symfony2',
          value: 70,
        },
        {
          label: 'PHP',
          value: 60,
        }
      ],
      jobs: [
        {
          company: 'Electronic Arts',
          logo: 'img/logos/EA-Sports-Logo.png',
          date: 'May - September, 2014',
          position: 'Software Engineer',
          description: 'My most recent co-op term was as a Software Engineer at EA Sports in Burnaby, BC. I was a web developer on the Pulse team, working on online Fifa Ultimate Team content. A majority of my development at EA was with AngularJS, and my immediate love of the language inspired me to make this website using Angular!'
        },
        {
          company: 'BC Hydro',
          logo: 'img/logos/BC-Hydro-Logo.png',
          date: 'September - December, 2013',
          position: 'Project Management',
          description: 'During my term at BC Hydro I worked at the offices in downtown Vancouver and Langley, BC, assisting in project management within Grid Operations. Jumping into the world of project management taught me a lot in a short amount of time, from dealing with the politics of management, to tight deadlines. Having experience in both software development and project management has given me a valuable outlook on running a functional and cohesive technology company.'
        },
        {
          company: 'Gumstix Inc',
          logo: 'img/logos/Gumstix-Logo.png',
          date: 'January - May, 2013',
          position: 'Growth Hacker',
          description: 'At Gumstix I assisted in Growth Hacking in their Redwood City, California office. Diving into the tech capitol of the world was a phenomenal experience, both inside and outside of work. During this term I truly fell in love with programming and knew that I wanted to pursue web development. I helped create an application to organize company products, create social network posts/press releases, and view site analytics. Aside from learning about the hardware side of things, I was introduced to many new languages, IDEs, and operating systems.'
        },
        {
          company: 'UW Enterprise Co-op',
          logo: 'img/logos/Conrad-Logo.png',
          date: 'May - September, 2012',
          position: 'Founder',
          description: 'During the 2012 winter school term, a classmate and I conceptualized a music recommendation system that we called “NextBestSong”. For our first co-op term we were accepted into the Enterprise Co-op program at the University of Waterloo. Although we were the youngest of the 15 groups accepted, we taught ourselves the necessary languages to develop the application. My classmate and I, along with a USC student and a former Microsoft employee, worked on the music recommendation application, to create a complex back end and user friendly front end. By the end of the term we were not ready to realease a Beta version and have put the project on hold since.'
        }
      ],
      interests: [
        {
          name: 'soccer',
          imgSrc: 'Soccer.jpg',
        },
        {
          name: 'coding',
          imgSrc: 'AngularJS.png',
        },
        {
          name: 'skiing',
          imgSrc: 'Skiing.jpg',
        },
        {
          name: 'tennis',
          imgSrc: 'Tennis.jpg',
        },
        {
          name: 'renewable',
          imgSrc: 'Renewable_Energy.jpg',
        }
      ],
      cities: [
        {
          city : 'Enterprise Co-op',
          desc : 'Founder NextBestSolutions',
          lat : 43.47229,
          long : -80.54486
        },
        {
          city : 'BC Hydro',
          desc : 'Project Management',
          lat : 49.28203,
          long : -123.11257
        },
        {
          city : 'Electronic Arts',
          desc : 'Software Engineer',
          lat : 49.24773,
          long : -123.00974
        },
        {
          city : 'Gumstix Inc',
          desc : 'This city is live!',
          lat : 37.50636,
          long : -122.21108
        }
      ],
      quotes: [
        {
          text: "[Man] sacrifices his health in order to make money. Then he sacrifices money to recuperate his health. And then he is so anxious about the future that he does not enjoy the present; the result being that he does not live in the present or the future; he lives as if he is never going to die, and then dies having never really lived.",
          author: 'Dalai Lama'
        },
        {
          text: "You can easily judge a man by how he treats those who can do nothing for him",
          author: 'James D. Miles'
        },
        {
          text: "The good thing about science is that it's true whether or not you believe in it.",
          author: 'Neil deGrasse Tyson'
        },
        {
          text: "If you want to build a ship, don't drum up the men to gather wood, divide the work, and give orders. Instead, teach them to yearn for the vast and endless sea.",
          author: 'Antoine de Saint-Exupery'
        },
        {
          text: "Even if you're on the right track, you'll get run over if you just sit there.",
          author: 'Will Rogers'
        },
        {
          text: "The problem with the world is that the intelligent people are full of doubts while the stupid ones are full of confidence.",
          author: 'Charles Bukowski'
        },
        {
          text: "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.",
          author: 'Albert Einstein'
        },
        {
          text: "If you want to go quickly, go alone. If you want to go far, go together.",
          author: 'Michael Chertok'
        },
        {
          text: "You develop an instant global consciousness, a people orientation, an intense dissatisfaction with the state of the world, and a compulsion to do something about it. From out there on the moon, international politics look so petty. You want to grab a politician by the scruff of the neck and drag him a quarter of a million miles out and say, ‘Look at that, you son of a bitch.",
          author: 'Edgar Mitchell'
        },
        {
          text: "I am the master of my fate: I am the captain of my soul",
          author: 'William Ernest Henley'
        },
        {
          text: "It would be almost unbelievable, if history did not record the tragic fact, that men have gone to war and cut each other's throats because they could not agree as to what was to become of them after their throats were cut.",
          author: 'Walter P. Stacy'
        },
        {
          text: "Today is the first day of the rest of your life",
          author: 'Charles Dederich'
        },
        {
          text: "Intelligence is the ability to adapt to change",
          author: 'Stephen Hawking'
        },
        {
          text: "Shoot for the moon and if you miss you will land among the stars.",
          author: 'Les Brown'
        },
        {
          text: "Some cause happiness wherever they go, others whenever they go.",
          author: 'Oscar Wilde'
        },
        {
          text: "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over again in my life. And that is why I succeed.",
          author: 'Michael Jordan'
        },
        {
          text: "A man who wants to lead the orchestra must turn his back on the crowd.",
          author: 'Max Lucado'
        },
        {
          text: "There is only one way to avoid criticism: Do nothing, say nothing, and be nothing.",
          author: 'Aristotle'
        }
      ],
      gridLetters: 'eyomsrnkvsll404nnmhxvkomvqpageijtnotnfigzdeyoejcmfoundbnjfxlppom'
    };
  }])
  .service('skrollrService', ['$q', '$rootScope',
    function($q, $rootScope){

      var defer = $q.defer();

      function onScriptLoad() {
        // Load client in the browser
        $rootScope.$apply(function() {
          var s = skrollr.init({
            forceHeight: false
          });
          defer.resolve(s);
        });
      }

      // Create a script tag with skrollr as the source and call
      // onScriptLoad callback when it has been loaded
      var scriptTag = $(document)[0].createElement('script');
      scriptTag.type = 'text/javascript';
      scriptTag.async = true;
      scriptTag.src = 'bower_components/skrollr/dist/skrollr.min.js';

      scriptTag.onreadystatechange = function () {
        if (this.readyState === 'complete') onScriptLoad();
      };

      scriptTag.onload = onScriptLoad;

      var s = $(document)[0].getElementsByTagName('body')[0];
      s.appendChild(scriptTag);

      return {
        skrollr: function() { return defer.promise; }
      };
  }]);