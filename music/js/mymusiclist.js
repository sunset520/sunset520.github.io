const ap=new APlayer({container:document.getElementById('player'),mini:false,autoplay:true,theme:'#FADFA3',loop:'all',order:'random',preload:'auto',volume:0.7,mutex:true,listFolded:false,listMaxHeight:1000,audio:[{name: 'Adagio in C Minor.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/VpSGFlgxCFwgivN6eGUBYWHKBF4I7eWM/Adagio%20in%20C%20Minor.m4a',},{name: 'Alice good night - ICE BIRD STUDIO、Riin.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/esEQuCA8qP4nKn98appQsULfTmpi8no1/Alice%20good%20night%20-%20ICE%20BIRD%20STUDIO%E3%80%81Riin.mp3',},{name: 'All Falls Down.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/MJw1h9ux8JkPN9l65kaHExpt7DlDRiHd/All%20Falls%20Down.mp3',},{name: 'Because of You.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/ynD5LPRXj8XxQrSFsUcKN3Kpdjq8QY32/Because%20of%20You.m4a',},{name: 'Beyond the Sky.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/3ah0vfVhlConou42sdfrnDxymfJk8vqy/Beyond%20the%20Sky.mp3',},{name: 'Canon in D Major (经典钢琴版) - dylanf.flac',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/8aef6f0d9d558d6b6deb.flac/Canon%20in%20D%20Major%20%28%E7%BB%8F%E5%85%B8%E9%92%A2%E7%90%B4%E7%89%88%29%20-%20dylanf.flac',},{name: 'Childhood Memory.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/OG0yl53lh5wkl8tzCHVm585mHFMOczBv/Childhood%20Memory.mp3',},{name: 'Counting Stars.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/1JkQIPkTSBjuseyw70JkzyXDXqa50TjA/Counting%20Stars.m4a',},{name: 'Dancing With Your Ghost.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/XFmSt0Lyt4tCoKpXaVvvSRfopfNUJs4E/Dancing%20With%20Your%20Ghost.m4a',},{name: 'Dream (梦) - Rabpit.flac',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/oyQfsaRvQfqvxTIfOx7hkpse4XEzMzNR/Dream%20%28%E6%A2%A6%29%20-%20Rabpit.flac',},{name: 'Dream It Possible.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/KWaeHAcUjelrmxTqjLDpHcCSlYkSfdhK/Dream%20It%20Possible.mp3',},{name: 'Everybody.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/1Hpfh2kfmotTqoSHBjBzhgQ1lhLO8OCq/Everybody.m4a',},{name: 'Faded.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/SVMyktAM0bkPb3EQV5e2jldcFOSavMHa/Faded.m4a',},{name: 'Fire - Gavin DeGraw.flac',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/6EgI5Fe5FsTqqjDHBF5bz5izaXpx9zWt/Fire%20-%20Gavin%20DeGraw.flac',},{name: 'Five Hundred Miles.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/BfssMfyTcu9SbVhVjFivFD6yoMxD5gqt/Five%20Hundred%20Miles.mp3',},{name: 'Fluquor - onoken.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/1XMGFIYvkRLC155jhNLDtHMl4JVCkPPQ/Fluquor%20-%20onoken.mp3',},{name: 'Higher.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/KPHuO56dEBAgfae8KOWOvhuEA2uPpYzL/Higher.mp3',},{name: 'Horizon.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/tRlymloRR49gCzHxQct8lmIoyE9JyeEi/Horizon.m4a',},{name: 'In The End.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/AhESprtdWd2C4lQ4jttxohQfYtvDsgxS/In%20The%20End.mp3',},{name: 'Kiss The Rain.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/oYYpEobAemXO9QU3IkUohvi4nJEC8M6G/Kiss%20The%20Rain.m4a',},{name: 'Larg.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/DiLC1HNBw1zWMMBuo5wfT52bmYyFHnVX/Larg.m4a',},{name: 'Legacy - switchworks.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/17sH3jlpCoCN10lthhJL8bFvMRKdvvcm/Legacy%20-%20switchworks.mp3',},{name: 'Lemon Tree.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/MgXt6S8YfBNdjBV74Nnw7PRC3xASqLKE/Lemon%20Tree.m4a',},{name: 'Lemon.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/DQPNDoL0Tmzn1Txz6uvj4yBEP9368fuK/Lemon.m4a',},{name: 'Let Her Go.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/V51A3aOH2exCfaBFR5fyfsSaP12u812h/Let%20Her%20Go.m4a',},{name: 'Liekkas.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/YxwmVAfp4Sui7y811QfhKFtHyiEd4idG/Liekkas.m4a',},{name: 'Limitless.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/QXzi3bLaXvD6R12WFBNxBkpT4RpTNI4P/Limitless.m4a',},{name: 'Monody.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/ib5kTutGmg6PHuGgmtsTLOEKsnvd5ev9/Monody.mp3',},{name: 'My Heart Will Go On.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/v4LVjGrnMz1aKE8pmb2f58Y77nf3UbJN/My%20Heart%20Will%20Go%20On.m4a',},{name: 'Nevada.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/dzYv6HNnbzQSp0fBj4cXRUT9J2moDUuo/Nevada.mp3',},{name: 'Nightingale.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/qCl4gp6QC3J6V8yAh1XX5hFWzccOG462/Nightingale.m4a',},{name: 'Please Don’t Go.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/H8uFAd4tzONdy7Gyu89qeDFptCeAkf1o/Please%20Don%E2%80%99t%20Go.m4a',},{name: 'Remember Our Summer.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/UHzDTbh8lh02FzCBez4L5jWqBVe8oPIr/Remember%20Our%20Summer.m4a',},{name: 'River Flows in You.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/X7FWxukQtuEgh1KGXe8z2EExomKgh9ta/River%20Flows%20in%20You.m4a',},{name: 'Sakura iro no yume - 土岐千尋.flac',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/8mmW5FWYUP3UpYFRSimLq92BL7LKzoNv/Sakura%20iro%20no%20yume%20-%20%E5%9C%9F%E5%B2%90%E5%8D%83%E5%B0%8B.flac',},{name: 'Scarborough Fair (1968).m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/k3r69MJrMqaIrWlywRHgcPntmB2RuSDx/Scarborough%20Fair%20%281968%29.m4a',},{name: 'Scarborough Fair.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/BV7JHg1PG18oLmRCm9nwAxFyRFGsdSl2/Scarborough%20Fair.m4a',},{name: 'Seasons in the Sun.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/qgWAq2omCpNlPx5tInsHRXqcLeOGXYzx/Seasons%20in%20the%20Sun.m4a',},{name: 'See You Again.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/IaTjMFpGRke9d29HBVMpY2OP6JNpiEa0/See%20You%20Again.mp3',},{name: 'Shape of You.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/eqpaC4XUPekc6buDrqT4P8sYNLdNHFd9/Shape%20of%20You.mp3',},{name: 'Sky (Radio Edit).m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/12rrSi9R5qStkkNTN7ouGhWCtxtaswha/Sky%20%28Radio%20Edit%29.m4a',},{name: 'Something Just Like This.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/a99bJ0bvvjVsj31AaG5PGGH2eVzug2KF/Something%20Just%20Like%20This.m4a',},{name: 'Star Sky - Instrumental.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/cif67CqazggjuX09wPshns58HmIlVP8K/Star%20Sky%20-%20Instrumental.m4a',},{name: 'Summer.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/5CGF8NF6Pnul1RqXzifdDvioE1BV5YQi/Summer.mp3',},{name: 'Take Me To Your Heart.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/uT6jNrMiGnmgsy3zhueiFnY7RGDQXemB/Take%20Me%20To%20Your%20Heart.mp3',},{name: 'That Girl.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/KcFaV8zCyAVvEJf4dTyH5TYOcTnBCCDv/That%20Girl.m4a',},{name: 'The Ludlows.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/Y0W4TUunBj8mmHzxAR6WgRAhrRpl50gg/The%20Ludlows.m4a',},{name: 'The Show.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/VbBWkh7BaaUEjKEdhxX7scbMopwof68s/The%20Show.m4a',},{name: 'The Sound of Silence.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/jd79m4qXPUNIxsIlz7qIsNbym5RvKjj7/The%20Sound%20of%20Silence.m4a',},{name: 'The Spectre.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/jBDRSV5Nwc0YAeYJEMtGqzGn35x2EE01/The%20Spectre.m4a',},{name: 'There For You.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/BCACTY9sagAk33Dx7cKuPB4QVLB3yDV4/There%20For%20You.m4a',},{name: 'Trouble Is A Friend.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/0vTbyM9NhevvwADGUTVOuU3KevDvbzBM/Trouble%20Is%20A%20Friend.m4a',},{name: 'Unity - TheFatRat.flac',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/4af3dfc249156d76c921.flac/Unity%20-%20TheFatRat.flac',},{name: 'Unity.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/p1Qe5OD9Kr98KDkYGHxc0hq1yW2vzwaF/Unity.mp3',},{name: 'Victory.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/xa1fTXTSgooKv7T7CGfpnBDOWszHjggd/Victory.mp3',},{name: 'Waiting For Love.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/YFQ4YTrzJILqUiC4k91RLoeQoJHsDOyR/Waiting%20For%20Love.m4a',},{name: 'Waka Waka (This Time For Africa).m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/q5mKTa7xSvPvYGJDYLpY9AiQuhb5xqez/Waka%20Waka%20%28This%20Time%20For%20Africa%29.m4a',},{name: 'What Makes You Beautiful.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/b3p5d1WVUvGaTN3oY1KemOE5nObJKXBd/What%20Makes%20You%20Beautiful.m4a',},{name: 'Wings of Piano (琴之翼) - V.K克.flac',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/qR7Cs1TGwdII6Xwcu34fbOBRn5mV9oM6/Wings%20of%20Piano%20%28%E7%90%B4%E4%B9%8B%E7%BF%BC%29%20-%20V.K%E5%85%8B.flac',},{name: 'Yesterday Once More.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/wzG7WQ3PK76NukO3eDka4URVMOEJfXTm/Yesterday%20Once%20More.m4a',},{name: 'You Are Not Alone.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/jiBHRLPa3qy4YQ5fd9hH2yFdVFqb6R79/You%20Are%20Not%20Alone.m4a',},{name: 'You Don’t Know Me.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/rhI5CBoXzEfdJE4q3imG2xgiCHgPTCT2/You%20Don%E2%80%99t%20Know%20Me.m4a',},{name: 'You Raise Me Up.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/GuR6m178IouTiCBcbpx7kI8YsN0jUQLe/You%20Raise%20Me%20Up.mp3',},{name: 'Young For You - GALA.flac',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/9dd7a1dd755dc429ea99.flac/Young%20For%20You%20-%20GALA.flac',},{name: 'いつも何度でも.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/m9Ru9KvkmJJBoi4dKDIfYEe6H3uzhEVD/%E3%81%84%E3%81%A4%E3%82%82%E4%BD%95%E5%BA%A6%E3%81%A7%E3%82%82.m4a',},{name: '一步之遥(经典钢琴版) - dylanf.flac',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/f7c9d2b689f910f67ba1.flac/%E4%B8%80%E6%AD%A5%E4%B9%8B%E9%81%A5%28%E7%BB%8F%E5%85%B8%E9%92%A2%E7%90%B4%E7%89%88%29%20-%20dylanf.flac',},{name: '伴随着你.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/c3Ye8lHySxXS1nTFvOkMqnfW5McXqWdI/%E4%BC%B4%E9%9A%8F%E7%9D%80%E4%BD%A0.m4a',},{name: '克罗地亚狂想曲.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/oK0trVJWASKe6cXi12p7iQE4Kosc3sTy/%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%E7%8B%82%E6%83%B3%E6%9B%B2.mp3',},{name: '十年.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/5b2RB6v82zlIbDdGWKIy5MN6H29BDD43/%E5%8D%81%E5%B9%B4.mp3',},{name: '千与千寻（纯音乐）.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/FHVzDkB8lAN38FbfPrrhDQm2IGDTGXFu/%E5%8D%83%E4%B8%8E%E5%8D%83%E5%AF%BB%EF%BC%88%E7%BA%AF%E9%9F%B3%E4%B9%90%EF%BC%89.m4a',},{name: '卡农（经典钢琴版）.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/akz6CLFrUNLdvUU2jIVtVcFkbrwNfGR1/%E5%8D%A1%E5%86%9C%EF%BC%88%E7%BB%8F%E5%85%B8%E9%92%A2%E7%90%B4%E7%89%88%EF%BC%89.m4a',},{name: '后会无期.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/bKah7oa63OCBrRBOuYloGCUcBH2hJlnh/%E5%90%8E%E4%BC%9A%E6%97%A0%E6%9C%9F.mp3',},{name: '告白气球.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/MOkxegRBLQhPHQv735eT8iYUkWKwPVOV/%E5%91%8A%E7%99%BD%E6%B0%94%E7%90%83.mp3',},{name: '城南花已开.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/mDtydEsluNnRu677PQPJEnGBpQwiswqe/%E5%9F%8E%E5%8D%97%E8%8A%B1%E5%B7%B2%E5%BC%80.m4a',},{name: '夏天的风.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/XKkNw0LeIVEo4hlALqs0mxmhVg0hX063/%E5%A4%8F%E5%A4%A9%E7%9A%84%E9%A3%8E.mp3',},{name: '夜空中最亮的星.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/HJC5Kzktayi1OKeX4m86Ths7o9AIdtmS/%E5%A4%9C%E7%A9%BA%E4%B8%AD%E6%9C%80%E4%BA%AE%E7%9A%84%E6%98%9F.mp3',},{name: '月光の雲海.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/H28GIoJ0MINqVYTBV1kVaG5DvEA8eT9I/%E6%9C%88%E5%85%89%E3%81%AE%E9%9B%B2%E6%B5%B7.m4a',},{name: '流年.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/dLf6sb1QXYm45Nvx3l0MEyXxUXQP7BOn/%E6%B5%81%E5%B9%B4.mp3',},{name: '私奔到月球 - 五月天、陈绮贞.flac',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/24cfe946b3374163c190.flac/%E7%A7%81%E5%A5%94%E5%88%B0%E6%9C%88%E7%90%83%20-%20%E4%BA%94%E6%9C%88%E5%A4%A9%E3%80%81%E9%99%88%E7%BB%AE%E8%B4%9E.flac',},{name: '蓝色多瑙河 (舞曲) - Classical Artists.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/297599180979fb5a7571.mp3/%E8%93%9D%E8%89%B2%E5%A4%9A%E7%91%99%E6%B2%B3%20%28%E8%88%9E%E6%9B%B2%29%20-%20Classical%20Artists.mp3',},{name: '蓝色多瑙河 - Johann Strauss II.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/53c3fae95f73f3176623.mp3/%E8%93%9D%E8%89%B2%E5%A4%9A%E7%91%99%E6%B2%B3%20-%20Johann%20Strauss%20II.mp3',},{name: '起风了-和楽器バンド.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/hvztGJsXgxx6OsXGlPespdtpXzqiVpcA/%E8%B5%B7%E9%A3%8E%E4%BA%86-%E5%92%8C%E6%A5%BD%E5%99%A8%E3%83%90%E3%83%B3%E3%83%89.mp3',},{name: '起风了.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/rC8o8917MF6qIlc7CYpBEcjPrRNezu8h/%E8%B5%B7%E9%A3%8E%E4%BA%86.mp3',},{name: '追光者.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/bYvEBKV2Xeenk0mn3WbNCLdsXn28ER2L/%E8%BF%BD%E5%85%89%E8%80%85.mp3',},{name: '错位时空.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/Cd7mApJV2XDPgCwE5Mk01uV649FgWMqY/%E9%94%99%E4%BD%8D%E6%97%B6%E7%A9%BA.m4a',},{name: '雨的印记(钢琴版).mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/gDKCLb9Q9z3Lsi8EsuaVR3Y9qLRHy7yn/%E9%9B%A8%E7%9A%84%E5%8D%B0%E8%AE%B0%28%E9%92%A2%E7%90%B4%E7%89%88%29.mp3',},{name: '青花瓷.mp3',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/ywSMwP8tne0wbIYxYToCs7pjWhQmaAeb/%E9%9D%92%E8%8A%B1%E7%93%B7.mp3',},{name: '風の住む街.m4a',url: 'https://lc-gluttony.s3.amazonaws.com/6wvnoH5leFq2/yooamQmHA4UUgv4264Vf8zEH5IssVEE1/%E9%A2%A8%E3%81%AE%E4%BD%8F%E3%82%80%E8%A1%97.m4a',},]});