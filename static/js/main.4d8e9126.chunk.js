(this["webpackJsonpblock-master"]=this["webpackJsonpblock-master"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var i=a(1),o=a.n(i),r=a(16),n=a.n(r),s=(a(22),a(14)),l=(a(23),a(24),a(2)),d=a(7),h=a(0);var g=function(e){var t=e.setInput,a=Object(l.f)();console.log(a);var o=Object(i.useRef)(null),r=a.location.search,n=new URLSearchParams(r).get("search");return console.log(n),Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)(d.b,{to:"/Block-Master-react/",children:Object(h.jsx)("img",{src:"./images/logo.png",alt:"logo de la p\xe1gina"})}),Object(h.jsxs)("ul",{className:"list-a",children:[Object(h.jsx)("li",{id:"allMovies",children:Object(h.jsx)(d.b,{to:"/Block-Master-react/",children:"Todas"})}),Object(h.jsx)("li",{id:"mostValued",children:Object(h.jsx)(d.b,{to:"/Block-Master-react/mostValued",children:"M\xe1s valoradas"})}),Object(h.jsx)("li",{id:"leastValued",children:Object(h.jsx)(d.b,{to:"/Block-Master-react/leastValued",children:"Menos valoradas"})})]}),Object(h.jsxs)("form",{className:"form",id:"form","aria-label":"formulario-header",onSubmit:function(e){e.preventDefault(),t(o.current.value);var i=o.current.value;a.push({search:"?search=".concat(i)})},children:[Object(h.jsx)("input",{type:"text",ref:o,defaultValue:n}),Object(h.jsx)("button",{type:"submit",role:"button",children:Object(h.jsx)("img",{src:"./images/icons/search.png",alt:"icono del buscador"})})]})]})};a(31);var c=function(){var e=Object(i.useRef)(null),t=Object(i.useRef)(null),a=Object(i.useRef)(null),o=Object(i.useRef)(null);function r(){t.current.classList.remove("active"),a.current.classList.remove("active"),o.current.classList.remove("active")}function n(){e.current.classList.remove("hero-img"),e.current.classList.remove("mulan"),e.current.classList.remove("raya"),e.current.classList.remove("unidos")}return Object(h.jsxs)("div",{className:"hero","aria-label":"hero",children:[Object(h.jsx)("img",{src:"images/mulan.png",className:"mulan",id:"imageHero",alt:"image mulan hero",ref:e}),Object(h.jsxs)("div",{className:"slider-circle",children:[Object(h.jsx)("div",{className:"circle active",id:"img1",onClick:function(){e.current.src="images/mulan.png",n(),e.current.classList.add("mulan"),r(),t.current.classList.add("active")},ref:t}),Object(h.jsx)("div",{className:"circle",id:"img2",onClick:function(){e.current.src="images/raya.png",n(),e.current.classList.add("raya"),r(),a.current.classList.add("active")},ref:a}),Object(h.jsx)("div",{className:"circle",id:"img3",onClick:function(){e.current.src="images/unidos.png",n(),e.current.classList.add("unidos"),r(),o.current.classList.add("active")},ref:o})]})]})};a(32);var p=function(e){var t=e.movie;return Object(h.jsxs)("div",{className:"movie",id:t.id,children:[Object(h.jsx)("h1",{className:"movie-title",children:t.title}),Object(h.jsx)("img",{src:t.poster_path,alt:"",className:"movie-image"}),Object(h.jsxs)("button",{children:[Object(h.jsx)("img",{src:"images/icons/star.png",alt:"icon star"}),Object(h.jsx)("p",{children:t.vote_average})]})]},t.id)};var u=function(e){return e.data.map((function(e,t){return Object(h.jsx)(p,{movie:e},t)}))};var v=function(e){return e.data.filter((function(e){if(e.vote_average<7)return!0})).map((function(e,t){return Object(h.jsx)(p,{movie:e},t)}))};var _=function(e){return e.data.filter((function(e){if(e.vote_average>7)return!0})).map((function(e,t){return Object(h.jsx)(p,{movie:e},t)}))};var m=function(e){var t=e.data,a=e.input;return a?t.filter((function(e){if(e.title.toLowerCase()==a.toLowerCase())return!0})).map((function(e){return Object(h.jsxs)("div",{className:"search-movie",children:[Object(h.jsx)("h1",{className:"title-section",children:"Pel\xedcula encontrada"}),Object(h.jsx)(p,{movie:e})]},"movie.id")})):null};var f=function(e){var t=e.data,a=Object(l.g)();console.log({location:a});var i=new URLSearchParams(a.search).get("search");return console.log(i),Object(h.jsxs)("main",{className:"main",children:[Object(h.jsx)(m,{data:t,input:i},"search-movie"),Object(h.jsx)("h1",{className:"title-section",children:"Todas las pel\xedculas"}),Object(h.jsx)("section",{className:"movies",id:"movies-container",children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/Block-Master-react/",exact:!0,children:Object(h.jsx)(u,{data:t},"all-movies")}),Object(h.jsx)(l.a,{path:"/Block-Master-react/leastValued",exact:!0,children:Object(h.jsx)(v,{data:t},"least-movies")}),Object(h.jsx)(l.a,{path:"/Block-Master-react/mostValued",exact:!0,children:Object(h.jsx)(_,{data:t},"most-movies")})]})})]})},b=[{popularity:1616.326,vote_count:18,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg",id:724989,adult:!1,backdrop_path:"/86L8wqGMDbwURPni2t7FQ0nDjsH.jpg",original_language:"en",original_title:"Hard Kill",genre_ids:[28,53],title:"Hard Kill",vote_average:5.8,overview:"The work of billionaire tech CEO Donovan Chalmers is so valuable that he hires mercenaries to protect it, and a terrorist group kidnaps his daughter just to get it.",release_date:"2020-08-25"},{popularity:1456.937,vote_count:159,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/zVncJzXzwIO15YM1WilqYn30r54.jpg",id:718444,adult:!1,backdrop_path:"/x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",original_language:"en",original_title:"Rogue",genre_ids:[28],title:"Rogue",vote_average:6.1,overview:"Battle-hardened O\u2019Hara leads a lively mercenary team of soldiers on a daring mission: rescue hostages from their captors in remote Africa. But as the mission goes awry and the team is stranded, O\u2019Hara\u2019s squad must face a bloody, brutal encounter with a gang of rebels.",release_date:"2020-08-20"},{popularity:1171.542,vote_count:30,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg",id:734309,adult:!1,backdrop_path:"/7fvdg211A2L0mHddvzyArRuRalp.jpg",original_language:"en",original_title:"Santana",genre_ids:[28],title:"Santana",vote_average:6.4,overview:"Two brothers \u2014 one a narcotics agent and the other a general \u2014 finally discover the identity of the drug lord who murdered their parents decades ago. They may kill each other before capturing the bad guys.",release_date:"2020-08-28"},{popularity:1123.256,vote_count:108,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/sMO1v5TUf8GOJHbJieDXsgWT2Ud.jpg",id:438396,adult:!1,backdrop_path:"/qGZe9qTuydxyJYQ60XDtEckzLR8.jpg",original_language:"es",original_title:"Or\xedgenes secretos",genre_ids:[18,53],title:"Unknown Origins",vote_average:6.2,overview:"In Madrid, Spain, a mysterious serial killer ruthlessly murders his victims by recreating the first appearance of several comic book superheroes. Cosme, a veteran police inspector who is about to retire, works on the case along with the tormented inspector David Valent\xedn and his own son Jorge El\xedas, a nerdy young man who owns a comic book store.",release_date:"2020-08-28"},{popularity:1066.224,vote_count:44,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/n6hptKS7Y0ZjkYwbqKOK3jz9XAC.jpg",id:594328,adult:!1,backdrop_path:"/lkeBhXGJFRlhI7cBWn8LQQAdZqK.jpg",original_language:"en",original_title:"Phineas and Ferb  The Movie Candace Against the Universe",genre_ids:[16,35,10402,878,10751,10770],title:"Phineas and Ferb  The Movie Candace Against the Universe",vote_average:7.1,overview:"Phineas and Ferb travel across the galaxy to rescue their older sister Candace, who has been abducted by aliens and taken to a utopia in a far-off planet, free of her pesky little brothers.",release_date:"2020-08-28"},{popularity:1046.033,vote_count:1102,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/TnOeov4w0sTtV2gqICqIxVi74V.jpg",id:605116,adult:!1,backdrop_path:"/qVygtf2vU15L2yKS4Ke44U4oMdD.jpg",original_language:"en",original_title:"Project Power",genre_ids:[28,80,878],title:"Project Power",vote_average:6.7,overview:"An ex-soldier, a teen and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers.",release_date:"2020-08-14"},{popularity:958.038,vote_count:341,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/sy6DvAu72kjoseZEjocnm2ZZ09i.jpg",id:581392,adult:!1,backdrop_path:"/gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg",original_language:"ko",original_title:"\ubc18\ub3c4",genre_ids:[28,27,53],title:"Peninsula",vote_average:7.2,overview:"A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula",release_date:"2020-07-15"},{popularity:859.648,vote_count:134,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/tM4hht0LdY06UbuxGR4LjK6adCD.jpg",id:613504,adult:!1,backdrop_path:"/dZJJDmiwp0W1NE74SY5WV00v0Ec.jpg",original_language:"en",original_title:"After We Collided",genre_ids:[18,10749],title:"After We Collided",vote_average:7.3,overview:"Tessa finds herself struggling with her complicated relationship with Hardin; she faces a dilemma that could change their lives forever.",release_date:"2020-09-02"},{popularity:843.438,vote_count:855,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",id:337401,adult:!1,backdrop_path:"/xl5oCFLVMo4d4Pgxvrf8Jmc2IlA.jpg",original_language:"en",original_title:"Mulan",genre_ids:[28,12,18,14,10752],title:"Mulan",vote_average:7.8,overview:"When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",release_date:"2020-09-04"},{popularity:812.371,vote_count:54,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/eDnHgozW8vfOaLHzfpHluf1GZCW.jpg",id:606234,adult:!1,backdrop_path:"/u9YEh2xVAPVTKoaMNlB5tH6pXkm.jpg",original_language:"en",original_title:"Archive",genre_ids:[878],title:"Archive",vote_average:6,overview:"2038: George Almore is working on a true human-equivalent AI, and his latest prototype is almost ready. This sensitive phase is also the riskiest as he has a goal that must be hidden at all costs\u2014being reunited with his dead wife.",release_date:"2020-08-13"},{popularity:804.043,vote_count:65,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/i4kPwXPlM1iy8Jf3S1uuLuwqQAV.jpg",id:721452,adult:!1,backdrop_path:"/riDrpqQtZpXGeiJdlmfcwwPH7nN.jpg",original_language:"en",original_title:"One Night in Bangkok",genre_ids:[28,53],title:"One Night in Bangkok",vote_average:7.2,overview:"A hit man named Kai flies into Bangkok, gets a gun, and orders a cab. He offers a professional female driver big money to be his all-night driver. But when she realizes Kai is committing brutal murders at each stop, it's too late to walk away. Meanwhile, an offbeat police detective races to decode the string of slayings before more blood is spilled.",release_date:"2020-08-25"},{popularity:765.892,vote_count:214,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/uGhQ2ZGBpzCj6wC5jUrybsZuPTI.jpg",id:539885,adult:!1,backdrop_path:"/ekkuqt9Q2ad1F7xq2ZONP0oq36P.jpg",original_language:"en",original_title:"Ava",genre_ids:[28,80,18,53],title:"Ava",vote_average:6.1,overview:"A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.",release_date:"2020-08-06"},{popularity:532.282,vote_count:68,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/5pe30v0z4ucVgwh5nR439cCzwwO.jpg",id:632618,adult:!1,backdrop_path:"/cVdYaAQmd5DZNdo0KFJruz7JpUs.jpg",original_language:"es",original_title:"Cr\xedmenes de familia",genre_ids:[80,18,53],title:"The Crimes That Bind",vote_average:7,overview:"When her son is accused of raping and trying to murder his ex-wife, Alicia embarks on a journey that will change her life forever.",release_date:"2020-08-20"},{popularity:509.318,vote_count:571,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/jHo2M1OiH9Re33jYtUQdfzPeUkx.jpg",id:385103,adult:!1,backdrop_path:"/fKtYXUhX5fxMxzQfyUcQW9Shik6.jpg",original_language:"en",original_title:"Scoob!",genre_ids:[12,16,35,10751],title:"Scoob!",vote_average:7.4,overview:"In Scooby-Doo\u2019s greatest adventure yet, see the never-before told story of how lifelong friends Scooby and Shaggy first met and how they joined forces with young detectives Fred, Velma, and Daphne to form the famous Mystery Inc. Now, with hundreds of cases solved, Scooby and the gang face their biggest, toughest mystery ever: an evil plot to unleash the ghost dog Cerberus upon the world. As they race to stop this global \u201cdogpocalypse,\u201d the gang discovers that Scooby has a secret legacy and an epic destiny greater than anyone ever imagined.",release_date:"2020-07-08"},{popularity:501.925,vote_count:94,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/A11Ez4UkOE4Ysmtmur5Bho8qrGM.jpg",id:611395,adult:!1,backdrop_path:"/qXACJOuyklS0BpvO8ALLkkrsv7W.jpg",original_language:"zh",original_title:"\u5f81\u9014",genre_ids:[28,12,14],title:"Double World",vote_average:6.9,overview:"Keen to bring honor to his clan, young villager Dong Yilong embarks on a perilous journey to compete in a tournament that selects warriors for battle.",release_date:"2020-07-24"},{popularity:473.21,vote_count:375,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/kPzcvxBwt7kEISB9O4jJEuBn72t.jpg",id:677638,adult:!1,backdrop_path:"/pO1SnM5a1fEsYrFaVZW78Wb0zRJ.jpg",original_language:"en",original_title:"We Bare Bears: The Movie",genre_ids:[12,16,35,10751],title:"We Bare Bears: The Movie",vote_average:7.8,overview:"When Grizz, Panda, and Ice Bear's love of food trucks and viral videos went out of hand, it catches the attention of Agent Trout from the National Wildlife Control, who pledges to restore the \u201cnatural order\u201d by separating them forever. Chased away from their home, the Bears embark on an epic road trip as they seek refuge in Canada, with their journey being filled with new friends, perilous obstacles, and huge parties. The risky journey also forces the Bears to face how they first met and became brothers, in order to keep their family bond from splitting apart.",release_date:"2020-06-30"},{popularity:460.596,vote_count:113,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/4V2nTPfeB59TcqJcUfQ9ziTi7VN.jpg",id:501979,adult:!1,backdrop_path:"/oazPqs1z78LcIOFslbKtJLGlueo.jpg",original_language:"en",original_title:"Bill & Ted Face the Music",genre_ids:[12,35,878],title:"Bill & Ted Face the Music",vote_average:6.5,overview:"Yet to fulfill their rock and roll destiny, the now middle-aged best friends Bill and Ted set out on a new adventure when a visitor from the future warns them that only their song can save life as we know it. Along the way, they are helped by their daughters, a new batch of historical figures and a few music legends\u2014to seek the song that will set their world right and bring harmony to the universe.",release_date:"2020-08-27"},{popularity:444.068,vote_count:65,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/bhNHCeJDFDaB00A46AoCw2mggdE.jpg",id:601165,adult:!1,backdrop_path:"/nxxODhq9I05Ze9uLONGvfDrzaUO.jpg",original_language:"en",original_title:"Legacy of Lies",genre_ids:[28,53],title:"Legacy of Lies",vote_average:6.1,overview:"An ex-MI6 agent is thrown back into the world of espionage and high stakes to uncover the shocking truth about operations conducted by unknown secret services.",release_date:"2020-08-06"},{popularity:442.72,vote_count:13,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/uvMjNLot0dG7CX4HZPme2WDkMmE.jpg",id:523849,adult:!1,backdrop_path:"/AmTfxc3S22z7WWC7KAR3SPs70Bl.jpg",original_language:"en",original_title:"The Last Sharknado: It's About Time",genre_ids:[28,12,35,878,10770],title:"The Last Sharknado: It's About Time",vote_average:6.2,overview:"With much of America lying in ruins, the rest of the world braces for a global sharknado, Fin and his family must travel around the world to stop them.",release_date:"2020-07-17"},{popularity:438.189,vote_count:23,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/q2lkJf1TAjImTHCEO7XvbqPtnPb.jpg",id:703134,adult:!1,backdrop_path:"/j57oUw8LIYvjOl0zs3A1A1UqwKH.jpg",original_language:"en",original_title:"Infamous",genre_ids:[80,18,53],title:"Infamous",vote_average:5.4,overview:"Two young lovers rob their way across the southland, posting their exploits to social media, and gaining fame and followers as a result.",release_date:"2020-06-12"},{popularity:437.445,vote_count:799,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/tI8ocADh22GtQFV28vGHaBZVb0U.jpg",id:475430,adult:!1,backdrop_path:"/o0F8xAt8YuEm5mEZviX5pEFC12y.jpg",original_language:"en",original_title:"Artemis Fowl",genre_ids:[28,12,14,878,10751],title:"Artemis Fowl",vote_average:5.8,overview:"Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",release_date:"2020-06-12"},{popularity:436.561,vote_count:1943,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg",id:547016,adult:!1,backdrop_path:"/m0ObOaJBerZ3Unc74l471ar8Iiy.jpg",original_language:"en",original_title:"The Old Guard",genre_ids:[28,14],title:"The Old Guard",vote_average:7.3,overview:"Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal.",release_date:"2020-07-10"},{popularity:435.283,vote_count:107,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/e7ZsW5EbLbQwoGx0548KCmCAXA9.jpg",id:508570,adult:!1,backdrop_path:"/fFdOJxmG2U7IYYlkFKtDk1nGPhF.jpg",original_language:"en",original_title:"The One and Only Ivan",genre_ids:[35,18,10751],title:"The One and Only Ivan",vote_average:7.2,overview:"Ivan is a 400-pound silverback gorilla who shares a communal habitat in a suburban shopping mall with Stella the elephant, Bob the dog, and various other animals. He has few memories of the jungle where he was captured, but when a baby elephant named Ruby arrives, it touches something deep within him. Ruby is recently separated from her family in the wild, which causes him to question his life, where he comes from and where he ultimately wants to be.",release_date:"2020-08-21"},{popularity:428.33,vote_count:139,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg",id:618354,adult:!1,backdrop_path:"/bazlsLkNuhy3IuhviepqvlMm2hV.jpg",original_language:"en",original_title:"Superman: Man of Tomorrow",genre_ids:[28,16,878],title:"Superman: Man of Tomorrow",vote_average:7.3,overview:"It\u2019s the dawn of a new age of heroes, and Metropolis has just met its first. But as Daily Planet intern Clark Kent \u2013 working alongside reporter Lois Lane \u2013 secretly wields his alien powers of flight, super-strength and x-ray vision in the battle for good, there\u2019s even greater trouble on the horizon.",release_date:"2020-08-23"},{popularity:427.083,vote_count:6,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/o1WvNhoackad1QiAGRgjJCQ1Trj.jpg",id:724717,adult:!1,backdrop_path:"/AbtsLdz1gUj2H1HJJ3TRaBOl8Ta.jpg",original_language:"en",original_title:"The 2nd",genre_ids:[28],title:"The 2nd",vote_average:6.7,overview:"Secret-service agent Vic Davis is on his way to pick up his estranged son, Sean, from his college campus when he finds himself in the middle of a high-stakes terrorist operation. His son's friend Erin Walton, the daughter of Supreme Court Justice Walton is the target, and this armed faction will stop at nothing to kidnap her and use her as leverage for a pending landmark legal case.",release_date:"2020-09-01"},{popularity:426.947,vote_count:7,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/dKSN0oZCUSNcEd39MnySLYmpUiJ.jpg",id:735110,adult:!1,backdrop_path:"/aahbYclKYfms6Utm5YHQOywsj9N.jpg",original_language:"es",original_title:"Fuego negro",genre_ids:[28,27,9648,53],title:"Dark Forces",vote_average:5,overview:"In search of his sister, a renegade criminal seeks answers at a sordid hotel where he encounters a sinister guest and romances a mysterious waitress.",release_date:"2020-08-21"},{popularity:419.135,vote_count:124,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/3eg0kGC2Xh0vhydJHO37Sp4cmMt.jpg",id:531499,adult:!1,backdrop_path:"/zogWnCSztU8xvabaepQnAwsOtOt.jpg",original_language:"en",original_title:"The Tax Collector",genre_ids:[28,80,18],title:"The Tax Collector",vote_average:6,overview:"David Cuevas is a family man who works as a gangland tax collector for high ranking Los Angeles gang members. He makes collections across the city with his partner Creeper making sure people pay up or will see retaliation. An old threat returns to Los Angeles that puts everything David loves in harm\u2019s way.",release_date:"2020-08-07"},{popularity:413.928,id:603119,video:!1,vote_count:85,vote_average:6.9,title:"The Silencing",release_date:"2020-07-18",original_language:"en",original_title:"The Silencing",genre_ids:[80,53,28],backdrop_path:"/aSdp2uS0jWkqdhCeyhJuCoiLZji.jpg",adult:!1,overview:"A reformed hunter becomes involved in a deadly game of cat and mouse when he and the local sheriff set out to track a vicious killer who may have kidnapped his daughter years ago.",poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/dnN1ncxEOO1TY0gYL2FWxJqlhlL.jpg"},{popularity:412.505,vote_count:4,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/w6e0XZreiyW4mGlLRHEG8ipff7b.jpg",id:722603,adult:!1,backdrop_path:"/m7QpUAeI2xTCJyAVl9J9z5dBTSb.jpg",original_language:"en",original_title:"Battlefield 2025",genre_ids:[28,27,878],title:"Battlefield 2025",vote_average:5.3,overview:"Weekend campers, an escaped convict, young lovers and a police officer experience a night of terror when a hostile visitor from another world descends on a small Arizona town.",release_date:"2020-07-07"},{popularity:391.98,vote_count:133,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/vFIHbiy55smzi50RmF8LQjmpGcx.jpg",id:703771,adult:!1,backdrop_path:"/owraiceOKtSOa3t8sp3wA9K2Ox6.jpg",original_language:"en",original_title:"Deathstroke: Knights & Dragons - The Movie",genre_ids:[28,16],title:"Deathstroke: Knights & Dragons - The Movie",vote_average:7,overview:"Ten years ago, Slade Wilson-aka the super-assassin called Deathstroke-made a tragic mistake and his wife and son paid a terrible price. Now, a decade later, Wilson's family is threatened once again by the murderous Jackal and the terrorists of H.I.V.E. Can Deathstroke atone for the sins of the past-or will his family pay the ultimate price?",release_date:"2020-08-04"},{popularity:373.784,vote_count:5094,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg",id:38700,adult:!1,backdrop_path:"/upUy2QhMZEmtypPW3PdieKLAHxh.jpg",original_language:"en",original_title:"Bad Boys for Life",genre_ids:[28,80,53],title:"Bad Boys for Life",vote_average:7.3,overview:"Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.",release_date:"2020-01-15"},{popularity:352.444,vote_count:228,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/bKthjUmxjHjvJK8FktFfQdmwP12.jpg",id:703745,adult:!1,backdrop_path:"/hIHtyIYgBqHybOgUdoAmveipuiO.jpg",original_language:"en",original_title:"Deep Blue Sea 3",genre_ids:[28,27,878],title:"Deep Blue Sea 3",vote_average:6.2,overview:'Dr. Emma Collins and her team are spending their third summer on the island of Little Happy studying the effect of climate change on the great white sharks who come to the nearby nursery every year to give birth. Along with the last two inhabitants of this former fishing village, their peaceful life is disrupted when a "scientific" team led by her ex-boyfriend and marine biologist Richard show up looking for three bull sharks who we soon learn aren\'t just any bull sharks.',release_date:"2020-07-28"},{popularity:349.588,vote_count:38,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/xqbQtMffXwa3oprse4jiHBMBvdW.jpg",id:601844,adult:!1,backdrop_path:"/qTrpw2ZUvN7ywUu1kieEsvNDrgQ.jpg",original_language:"en",original_title:"Becky",genre_ids:[28,27,53],title:"Becky",vote_average:4.9,overview:"A teenager's weekend at a lake house with her father takes a turn for the worse when a group of convicts wreaks havoc on their lives.",release_date:"2020-07-23"},{popularity:334.491,vote_count:1083,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/kjMbDciooTbJPofVXgAoFjfX8Of.jpg",id:516486,adult:!1,backdrop_path:"/xXBnM6uSTk6qqCf0SRZKXcga9Ba.jpg",original_language:"en",original_title:"Greyhound",genre_ids:[28,18,10752],title:"Greyhound",vote_average:7.5,overview:"A first-time captain leads a convoy of allied ships carrying thousands of soldiers across the treacherous waters of the \u201cBlack Pit\u201d to the front lines of WW2. With no air cover protection for 5 days, the captain and his convoy must battle the surrounding enemy Nazi U-boats in order to give the allies a chance to win the war.",release_date:"2020-06-19"},{popularity:333.736,vote_count:5694,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg",id:495764,adult:!1,backdrop_path:"/9xNOiv6DZZjH7ABoUUDP0ZynouU.jpg",original_language:"en",original_title:"Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",genre_ids:[28,35,80],title:"Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",vote_average:7.2,overview:"Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.",release_date:"2020-02-05"},{popularity:331.826,vote_count:364,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/dqKqzcdhtJwOhjqe89RTURqILtl.jpg",id:514207,adult:!1,backdrop_path:"/kUaE05cgWuuygBorOcBFNn2x3CO.jpg",original_language:"ru",original_title:"\u0412\u0442\u043e\u0440\u0436\u0435\u043d\u0438\u0435",genre_ids:[28,18,27,878],title:"Invasion",vote_average:7.1,overview:"After the fall of the alien ship, it took three years. The catastrophe turned the girl's life from Chertanovo and forever changed our view of the universe. It seems that this was the biggest test for all of us. But mankind does not yet know that very soon he will have to experience a new meeting.",release_date:"2020-01-01"},{popularity:309.216,vote_count:4,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/pXv4qbWyj6ycMaWkK2LzlizZQjf.jpg",id:713825,adult:!1,backdrop_path:"/tWxCVe4rQZa3BvR3tMT3t74oVTT.jpg",original_language:"en",original_title:"Robot Riot",genre_ids:[28,878],title:"Robot Riot",vote_average:3.8,overview:"Unconscious soldiers are dropped into a testing site only to discover their memories have been wiped and that once docile machines are the new intelligence.",release_date:"2020-06-12"},{popularity:300.997,vote_count:124,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/aVbqhqYtlxwEGihTEhewZAgDOCX.jpg",id:489326,adult:!1,backdrop_path:"/dFB6Tiy3z2xRLbnEUB5ocApT5xG.jpg",original_language:"en",original_title:"Mortal",genre_ids:[28,14,53],title:"Mortal",vote_average:6.8,overview:"A young boy must discover the origins of his extraordinary powers before he is captured by authorities hell-bent on condemning him for an accidental murder.",release_date:"2020-02-28"},{popularity:294.997,vote_count:14643,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",id:475557,adult:!1,backdrop_path:"/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",original_language:"en",original_title:"Joker",genre_ids:[80,18,53],title:"Joker",vote_average:8.2,overview:"During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",release_date:"2019-10-02"},{popularity:294.801,vote_count:152,video:!1,poster_path:"http://image.tmdb.org/t/p/w220_and_h330_face/h7dZpJDORYs5c56dydbrLFkEXpE.jpg",id:723072,adult:!1,backdrop_path:"/5TbtcmRySXPAEXBzwhiOYYDQmgv.jpg",original_language:"en",original_title:"Host",genre_ids:[27],title:"Host",vote_average:6.9,overview:"Six friends hire a medium to hold a s\xe9ance via Zoom during lockdown \u2014 but they get far more than they bargained for as things quickly go wrong. When an evil spirit starts invading their homes, they begin to realize they might not survive the night.",release_date:"2020-07-30"}];var w=function(){var e=Object(i.useState)(b),t=Object(s.a)(e,2),a=t[0],o=(t[1],Object(i.useState)("")),r=Object(s.a)(o,2),n=r[0],l=r[1];return Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)(g,{data:a,setInput:l},"header"),Object(h.jsx)(c,{}),Object(h.jsx)(f,{data:a,input:n,ke:"main"})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,i=t.getFID,o=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),i(e),o(e),r(e),n(e)}))};n.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(d.a,{children:Object(h.jsx)(w,{})})}),document.getElementById("root")),j()}},[[33,1,2]]]);
//# sourceMappingURL=main.4d8e9126.chunk.js.map