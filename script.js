const galleryItems = [
  {
    title: "2012 年修繕前的土角磚牆",
    category: "childhood",
    src: "assets/photos/web/old-house-2012-before-wall.jpg",
    date: "2012-10-28",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "美人山下",
    note: "土角磚外露、牆面斑駁，保留老屋尚未修復前最真實的樣貌。"
  },
  {
    title: "2012 年老屋庭院與護龍",
    category: "childhood",
    src: "assets/photos/web/old-house-2012-courtyard.jpg",
    date: "2012-10-28",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "回家的路",
    note: "庭院裡堆放著修繕材料，背景可見老屋、紅磚與土角牆交錯的痕跡。"
  },
  {
    title: "木窗與舊木料",
    category: "childhood",
    src: "assets/photos/web/old-house-2015-wood-windows.jpg",
    date: "2015-11-29",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "修舊如舊",
    note: "木窗、舊木料與土角磚牆，記錄老屋修舊如舊的施工細節。"
  },
  {
    title: "四兄弟修復土角厝",
    category: "childhood",
    src: "assets/photos/web/old-house-2016-restoration-work.jpg",
    date: "2016-01-10",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "老屋重生",
    note: "修補外牆與整理舊木料的工作現場，一磚一瓦都是對家的情感。"
  },
  {
    title: "2016 年重生後的土角厝",
    category: "childhood",
    src: "assets/photos/web/old-house-2016-restored-front.jpg",
    date: "2016-06-05",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "山海之間",
    note: "整修後的土角厝重新站穩，盆栽與雨後地面讓老屋有了新的生活氣息。"
  },
  {
    title: "修繕後的土角厝全景",
    category: "childhood",
    src: "assets/photos/web/old-house-restored-front-wide.jpg",
    date: "待補",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "山海之間",
    note: "修繕完成後的正面視角，土角磚牆、木窗、盆栽與山林背景重新形成生活風景。"
  },
  {
    title: "土角牆與 66 號門牌",
    category: "childhood",
    src: "assets/photos/web/old-house-restored-wall-detail.jpg",
    date: "待補",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "修舊如舊",
    note: "近看修復後的土角磚牆、紅磚門框與 66 號門牌，呈現老屋新生後仍保留的歲月質感。"
  },
  {
    title: "修復後的側面與木窗",
    category: "childhood",
    src: "assets/photos/web/old-house-restored-side-view.jpg",
    date: "待補",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "老屋重生",
    note: "側面視角可看見木窗、土角牆、黑色矮牆與一整排綠植，讓老屋有了安定而溫暖的表情。"
  },
  {
    title: "雨中的土角厝屋簷",
    category: "childhood",
    src: "assets/photos/web/old-house-restored-rainy-eaves.jpg",
    date: "待補",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "北海鄉情",
    note: "雨水從屋簷落下，土角牆與盆栽在濕潤空氣裡顯得更有土地感。"
  },
  {
    title: "美人山與土角厝意象",
    category: "childhood",
    src: "assets/photos/web/old-house-meiren-mountain-composite.jpg",
    date: "待補",
    place: "金山美人山",
    gps: "概略位置待補",
    song: "美人山下",
    note: "土角厝與美人山的意象照片，可作為故事章節封面或歌曲封面。"
  },
  {
    title: "美人山天光",
    category: "childhood",
    src: "assets/photos/web/meiren-mountain-sky.jpg",
    date: "待補",
    place: "金山美人山",
    gps: "概略位置待補",
    song: "北海鄉情",
    note: "山形與天空的簡潔畫面，適合搭配故鄉開場文字。"
  },
  {
    title: "梯田、水田與北海岸遠景",
    category: "childhood",
    src: "assets/photos/web/jinshan-fields-sea-view.jpg",
    date: "待補",
    place: "金山美人山下",
    gps: "概略位置待補",
    song: "水水田莊",
    note: "從山坡望向金山與海岸，水田倒映天空，呼應北海鄉情主文。"
  },
  {
    title: "土角厝與山谷全景",
    category: "childhood",
    src: "assets/photos/web/old-house-panorama.jpg",
    date: "待補",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "山海之間",
    note: "寬幅全景呈現老屋、山谷與周邊環境，適合作為章節大圖。"
  },
  {
    title: "金山夜色與月光",
    category: "childhood",
    src: "assets/photos/web/jinshan-night-view.jpg",
    date: "待補",
    place: "金山美人山下",
    gps: "概略位置待補",
    song: "夜裡的故鄉",
    note: "夜色中的金山市區、田野與月光，留下另一種安靜的鄉情。"
  },
  {
    title: "楠溪採蜜",
    category: "beekeeping",
    src: "assets/photos/web/nanxi-honey-harvest-2018.jpg",
    date: "2018-04-13",
    place: "楠溪採蜜現場",
    gps: "概略位置待補",
    song: "蜂蜜金色的午後",
    note: "手持蜂巢片與蜂箱旁的採蜜現場，清楚呈現人與蜂一起工作的時刻。"
  },
  {
    title: "工地上的測量身影",
    category: "engineering",
    src: "assets/photos/web/engineering-site-measurement.jpg",
    date: "待補",
    place: "工程工地",
    gps: "待補",
    song: "工程人生",
    note: "站在鋼筋與模板之間，手扶測量尺，這是工程人生早期最真實的現場記憶。"
  },
  {
    title: "茶席旁的年輕歲月",
    category: "engineering",
    src: "assets/photos/web/tea-house-table.jpg",
    date: "待補",
    place: "茶行",
    gps: "待補",
    song: "茶香歲月",
    note: "茶桌、紫砂壺與牆上的茶園照片，記錄工程之外曾經走過的一段茶行歲月。"
  },
  {
    title: "茶行展示架前",
    category: "engineering",
    src: "assets/photos/web/tea-shop-display.jpg",
    date: "待補",
    place: "茶行",
    gps: "待補",
    song: "茶香歲月",
    note: "穿著襯衫與背心站在茶葉與茶具前，這一站是人生路上很特別的轉折。"
  },
  {
    title: "捷運隧道裡的工程人",
    category: "engineering",
    src: "assets/photos/web/metro-tunnel-portrait.jpg",
    date: "待補",
    place: "捷運工程現場",
    gps: "待補",
    song: "地下鐵的光",
    note: "戴著安全帽站在隧道口，身後是通往遠方的軌道，也是一段長年工程生涯的象徵。"
  },
  {
    title: "鋼構現場之一",
    category: "engineering",
    src: "assets/photos/web/metro-steel-structure-01.jpg",
    date: "待補",
    place: "捷運工程現場",
    gps: "待補",
    song: "工程人生",
    note: "鋼梁與結構之間，是工程人每天面對的秩序、風險與責任。"
  },
  {
    title: "鋼構現場之二",
    category: "engineering",
    src: "assets/photos/web/metro-steel-structure-02.jpg",
    date: "待補",
    place: "捷運工程現場",
    gps: "待補",
    song: "工程人生",
    note: "同一座工程從不同角度看見不同細節，照片保留下當時巡查與記錄的現場感。"
  },
  {
    title: "隧道與軌道",
    category: "engineering",
    src: "assets/photos/web/metro-tunnel-track.jpg",
    date: "待補",
    place: "捷運工程現場",
    gps: "待補",
    song: "地下鐵的光",
    note: "隧道裡的燈一路延伸，像工程人生一站接一站往前推進。"
  },
  {
    title: "茶畫下的奉茶時刻",
    category: "engineering",
    src: "assets/photos/web/tea-service-portrait.jpg",
    date: "待補",
    place: "茶行",
    gps: "待補",
    song: "茶香歲月",
    note: "茶席前的身影，把台灣茶、紫砂壺與待客的溫度留在同一張照片裡。"
  },
  {
    title: "蜂箱旁的家族承接",
    category: "beekeeping",
    src: "assets/photos/web/beekeeping-frame-family.jpg",
    date: "待補",
    place: "翔勝養蜂蜂場",
    gps: "待補",
    song: "一瓶蜂蜜",
    note: "與蜂農一起拿起蜂脾，這不是觀光式的照片，而是走進一個家族產業的現場。"
  },
  {
    title: "採蜜與離心機",
    category: "beekeeping",
    src: "assets/photos/web/beekeeping-honey-extractor.jpg",
    date: "待補",
    place: "翔勝養蜂蜂場",
    gps: "待補",
    song: "一瓶蜂蜜",
    note: "蜂脾、離心機與忙碌的雙手，讓人看見一瓶蜂蜜背後的工序與等待。"
  },
  {
    title: "翔勝茶蜂園的蜂箱",
    category: "beekeeping",
    src: "assets/photos/web/beekeeping-xiangsheng-boxes.jpg",
    date: "待補",
    place: "翔勝茶蜂園",
    gps: "待補",
    song: "山城蜂路",
    note: "白色蜂箱散落在樹下，箱身上的翔勝茶蜂園字樣，讓家族故事有了清楚的地標。"
  }
];

const articleItems = [
  {
    title: "安全帽下的三十五年",
    date: "2026-06-30",
    tag: "生命誌",
    category: "engineering",
    summary: "從金山鄉下長大的孩子，到退伍後北上討生活，歷經震旦業務、台南茶行、土木工程與台北捷運興建年代，也扛起一家人的生活。",
    link: "stories.html#thirtyFiveYears",
    keywords: "金山 鄉下 退伍 台北 震旦 業務 台南 茶行 建築 土木工程 捷運 地下工程 安全帽 家庭 父親 照護 看護 三十五年"
  },
  {
    title: "遠征台南古都的茶行夢",
    date: "2026-06-30",
    tag: "茶行歲月",
    category: "engineering",
    summary: "從木柵租屋的一場飯局，到辭職學茶、南下台南開門市，茶香裡有創業熱情，也有景氣反轉後的現實壓力。",
    link: "stories.html#memoir",
    keywords: "台南 古都 茶行 茶藝 紫砂壺 茶葉 茶山 喉韻 山頭氣味 西門 小北夜市 東帝士 股市 房租"
  },
  {
    title: "捷運工地裡的安衛與品管",
    date: "2026-06-30",
    tag: "捷運工程",
    category: "engineering",
    summary: "板南線過河段、府中站、乙級安衛證照與六車混凝土退回事件，記錄工程現場的風險、責任與堅持。",
    link: "stories.html#engineeringLife",
    keywords: "板南線 過河段 萬華 大漢溪 江子翠 府中站 潛盾 通風豎井 安衛 品管 混凝土 Type I Type II 乙級勞工安全衛生技術士"
  },
  {
    title: "北海鄉情．百年土角厝的重生",
    date: "2026-06-28",
    tag: "百年土角厝",
    category: "childhood",
    summary: "建於 1910 年的簡家土角厝，從一條龍格局、四兄弟整修，到返鄉務農，守住山海與家族記憶。",
    link: "childhood.html",
    keywords: "百年土角厝 土埆厝 金山 美人山 北海鄉情 1910 一條龍 護龍 四兄弟 修舊如舊 野柳岬 基隆嶼 梯田 水田 洛神花 金桔 南瓜 自然農法"
  },
  {
    title: "童年的一天",
    date: "2026-06-28",
    tag: "金山美人山",
    category: "childhood",
    summary: "凌晨四點、巡田、番薯籤粥、牽牛、溪裡抓蝦，這些細節會成為故鄉章節的核心。",
    link: "childhood.html",
    keywords: "童年 金山 田埂 水圳 梯田 媽媽 爸爸 番薯籤粥"
  },
  {
    title: "深耕五十年的台灣蜂農",
    date: "2026-06-28",
    tag: "翔勝養蜂",
    category: "beekeeping",
    summary: "苗栗頭份的養蜂人家，從爺爺五十餘年的蜂農歲月，到爸爸承接蜂群，延續人與蜂的故事。",
    link: "beekeeping.html",
    keywords: "翔勝養蜂 蜂農 蜂箱 花期 苗栗 頭份 爺爺 奶奶 爸爸 姑姑 蜂王 蜂王乳 花粉 龍眼蜜"
  },
  {
    title: "春分過後，追著龍眼花蜜由南往北",
    date: "2026-06-28",
    tag: "蜂農的一年",
    category: "beekeeping",
    summary: "每年春分過後，龍眼花開，蜂箱從台南山區開始遷移，再一路由南往北逐花而居。",
    link: "beekeeping.html#beekeepingTimeline",
    keywords: "春分 龍眼花 龍眼蜜 台南 山區 遷移 蜂箱 逐花而居"
  },
  {
    title: "為什麼蜂蜜會結晶？",
    date: "2026-06-28",
    tag: "蜜蜂知識",
    category: "knowledge",
    summary: "蜂蜜結晶不是壞掉，而是葡萄糖比例、溫度與花源共同形成的自然現象。",
    link: "beekeeping.html#beeKnowledge",
    keywords: "蜂蜜 結晶 天然蜂蜜 葡萄糖 百花蜜"
  },
  {
    title: "百花蜜每年為什麼不同？",
    date: "2026-06-28",
    tag: "蜜蜂知識",
    category: "knowledge",
    summary: "花開的順序、雨量、溫度與蜂場位置不同，會讓每一年的百花蜜都有自己的味道。",
    link: "beekeeping.html#beeKnowledge",
    keywords: "百花蜜 花期 蜂場 蜂蜜 味道"
  },
  {
    title: "把想念寫成一首歌",
    date: "2026-06-28",
    tag: "音樂創作",
    category: "music",
    summary: "有些回憶適合寫成長文，有些只需要一段旋律，就能回到原來的地方。",
    link: "music.html",
    keywords: "歌曲 歌詞 MP3 美人山 回家的路"
  },
  {
    title: "捷運工程人生的每一站",
    date: "2026-06-28",
    tag: "工程人生",
    category: "engineering",
    summary: "從第一份工作到捷運路線，每一站都不是履歷，而是人生轉折與時代現場。",
    link: "stories.html#engineeringLife",
    keywords: "工程 捷運 木柵線 淡水線 板南線 信義線 環狀線"
  },
  {
    title: "收藏也是一種記憶整理",
    date: "2026-06-28",
    tag: "收藏館",
    category: "collection",
    summary: "玉、茶、紫砂壺、老照片、老農具與老地圖，未來都可以成為數位典藏的一部分。",
    link: "stories.html#collectionRoom",
    keywords: "和闐玉 台灣茶 紫砂壺 老照片 老農具 老地圖"
  }
];

const reflectionItems = [
  { category: "childhood", text: "一畝休耕水田倒映著藍天白雲，像把歲月也暫時安放在土地上。" },
  { category: "childhood", text: "修舊如舊，不只是修一棟房子，也是替家族記憶留一條回家的路。" },
  { category: "life", text: "背著黃埔大背包走出台北車站時，人生才剛開始學著自己報到。" },
  { category: "life", text: "茶行的香、工地的灰、捷運隧道的光，後來都成為同一條回家的路。" },
  { category: "life", text: "品質關卡守住了，工程才有資格往下一站前進。" },
  { category: "life", text: "工程人在工地扛的是鋼筋水泥，回到家扛的是一整個家庭。" },
  { category: "beekeeping", text: "蜂蜜的甜，是花給的，也是人一年一年守出來的。" },
  { category: "music", text: "旋律一開始，有些沒有照片的畫面，也會自己亮起來。" },
  { category: "home", text: "山與海之間，最想留住的不是遠方，而是回家的方向。" },
  { category: "life", text: "今天看到一朵花，就想起一罐蜜背後，其實藏著一整年的等待。" },
  { category: "life", text: "走過工程現場，也走過田埂；後來才明白，人生每一條線都在回家。" }
];

const musicTracks = [
  {
    title: "北海鄉情．山海茶路",
    artist: "生命故事歌曲",
    src: "",
    cover: "",
    story: "依據金山土埆厝、台南茶行、捷運工程與返鄉務農改編的三段式生命歌曲；目前先放文字版，待 MP3 完成後可補上音檔。",
    lyrics: `北海鄉情．山海茶路

創作小引
一畝水田照著天，百年土牆守著家。
人從山海走到古都與地下鐵，最後還是把心放回土地。

曲風建議
民謠抒情，中慢板，男聲主唱，副歌可加入家人合聲。

第一段｜故鄉
美人山下風輕輕吹
土埆厝站在水田邊
藍天落入一畝清水
野柳岬遠遠看得見

竹林後有細漢的笑聲
溪水邊有蝦仔佮螃蟹
牛背上學會看天色
田埂路教我一步一步行

副歌
山海啊 山海啊
請替我守著老家的門
茶香啊 蜜香啊
陪我走過風雨的年輪
走到台南 走入地下的燈
回頭才知 故鄉是心內的根

第二段｜遠行
黃埔背包離開車站
台北街頭學著做人
推銷的門一扇一扇關
也把少年磨出一身膽

木柵酒桌一句邀請
牽我南下古都開茶行
紫砂壺裡浮著夢想
五個門市陪我拚到天光

股市落山 房租壓肩
母親離去 囝仔出世
人生轉彎無人先講
只好擦乾目屎再起行

副歌
山海啊 山海啊
請替我守著老家的門
茶香啊 蜜香啊
陪我走過風雨的年輪
走到台南 走入地下的燈
回頭才知 故鄉是心內的根

第三段｜回望
箱尺水準重新拿起
木柵線邊找回本行
雨鞋踏入捷運面試
少一點薪水換一家安定

大漢溪下潛盾前進
板橋街頭有反對的聲音
安全帽下守著規矩
六車混凝土退回去也無驚

如今夕陽照著老屋
洛神金桔種在田中央
若有一日牛鈴再響
我欲牽著童年慢慢行

尾聲
山海啊 山海啊
老厝的門永遠有燈
茶香啊 蜜香啊
甜苦攏是人生的回韻
一磚一瓦 一站一程
我把故事 唱乎土地聽`
  },
  {
    title: "山腳下的蜜香",
    artist: "翔勝養蜂",
    src: "assets/music/山腳下的蜜香.mp3",
    cover: "",
    story: "以山腳、蜂箱與蜜香作為主題，適合放在翔勝養蜂故事旁邊播放。",
    lyrics: `山腳下的蜜香
從花開的地方慢慢回來

按下左側歌曲按鈕
就能開始播放這首 MP3`
  },
  {
    title: "美人山下的月桃花",
    artist: "生命故事歌曲",
    src: "assets/music/美人山下的月桃花.mp3",
    cover: "",
    story: "寫美人山下的記憶、老屋與月桃花香。",
    lyrics: `美人山下的月桃花
把舊時光輕輕牽回來

風從山邊走過
也把家的聲音帶來`
  },
  {
    title: "人生親像蜜香紅茶",
    artist: "生命故事歌曲",
    src: "assets/music/人生親像蜜香紅茶.mp3",
    cover: "",
    story: "把人生滋味寫成蜜香紅茶，甘甜也帶著回韻。",
    lyrics: `人生親像蜜香紅茶
入口有甜 也有慢慢回來的香

一杯茶
一段路
一個人慢慢走出的故事`
  },
  {
    title: "玉米田的約定",
    artist: "生命故事歌曲",
    src: "assets/music/玉米田的約定.mp3",
    cover: "",
    story: "留給田野、童年與家族記憶的一首歌。",
    lyrics: `玉米田的約定
在風裡站成一排

那些說過的話
都還在土地裡發芽`
  },
  {
    title: "醉蜂鬧山頭",
    artist: "翔勝養蜂",
    src: "assets/music/醉蜂鬧山頭.mp3",
    cover: "",
    story: "把蜂群、山頭與熱鬧花期寫成有畫面的歌曲。",
    lyrics: `醉蜂鬧山頭
花開的時候
整座山都醒來`
  },
  {
    title: "心才有地方曬太陽",
    artist: "生命故事歌曲",
    src: "assets/music/心才有地方曬太陽.mp3",
    cover: "",
    story: "一首溫暖的歌，適合放在生命誌與家族故事裡。",
    lyrics: `心才有地方曬太陽
人就有力氣
慢慢走向明天`
  },
  {
    title: "美人山下的風",
    artist: "生命故事歌曲",
    src: "assets/music/美人山下的風.mp3",
    cover: "",
    story: "寫美人山、老家與風裡帶回來的記憶。",
    lyrics: `美人山下的風
吹過老屋
也吹回心裡的路`
  },
  {
    title: "願意拍手的人",
    artist: "生命故事歌曲",
    src: "assets/music/願意拍手的人.mp3",
    cover: "",
    story: "獻給一路支持、願意給掌聲的人。",
    lyrics: `願意拍手的人
把鼓勵留在路旁
陪人繼續往前行`
  },
  {
    title: "袂遮去我的天",
    artist: "生命故事歌曲",
    src: "assets/music/袂遮去我的天.mp3",
    cover: "",
    story: "帶有台語語感的生命歌，寫不被遮住的天空。",
    lyrics: `袂遮去我的天
風雨過了
光還是會照進來`
  },
  {
    title: "守望蜂鄉",
    artist: "翔勝養蜂",
    src: "assets/music/守望蜂鄉.mp3",
    cover: "",
    story: "寫蜂鄉、守候與一年一年累積的甜。",
    lyrics: `守望蜂鄉
守一季花開
也守一家人的希望`
  },
  {
    title: "金山土埆厝",
    artist: "生命故事歌曲",
    src: "assets/music/金山土埆厝.mp3",
    cover: "",
    story: "寫金山、美人山下與百年土埆厝的歌。",
    lyrics: `金山土埆厝
站在山海之間
把家的故事留下來`
  },
  {
    title: "美人山腳下的炊煙",
    artist: "生命故事歌曲",
    src: "assets/music/美人山腳下的炊煙.mp3",
    cover: "",
    story: "把炊煙、老屋與童年飯香寫進旋律裡。",
    lyrics: `美人山腳下的炊煙
慢慢升起
像有人叫阮回家`
  },
  {
    title: "慢慢走，花會開",
    artist: "生命故事歌曲",
    src: "assets/music/慢慢走，花會開.mp3",
    cover: "",
    story: "一首給自己也給家人的溫柔提醒。",
    lyrics: `慢慢走，花會開
不用急
日子會帶咱到該去的所在`
  }
];

const oldHouseTimeline = [
  { year: "1910", title: "簡家土角厝落成", text: "老屋建於一九一〇年，原本是傳統一條龍格局，見證金山美人山下百年農村歲月。" },
  { year: "增建", title: "家族人口增加，左右護龍陸續形成", text: "隨著家族人口增加，老屋陸續增建左右護龍，只可惜左側廂房後來年久崩壞。" },
  { year: "荒廢", title: "離鄉多年後，看見老屋逐漸沉睡", text: "簡家老二不忍兒時成長的老屋荒廢，決定號召四兄弟共同出錢出力修復。" },
  { year: "四年", title: "四兄弟整修，讓土角厝恢復生機", text: "歷經四年整修，地坪與砌磚仰賴專業工班，其餘土角磚修補、木窗木桌多由老二與么弟親手完成。" },
  { year: "修舊", title: "拆下舊土角磚，一塊塊砌回外牆", text: "兄弟們先在室內砌紅磚牆強化結構，再把拆下的舊土角磚重新砌回外牆，保存老屋原貌。" },
  { year: "共生", title: "土蜂洞留下百年自然痕跡", text: "土角厝後方仍可看見百年前土角磚牆，牆面小洞是昔日土蜂築巢痕跡，訴說人與自然共生。" },
  { year: "今天", title: "返鄉務農，找回土地溫度", text: "簡家夫婦每週回到土角厝整理田園，種植洛神花、金桔、南瓜等蔬果，堅持不施化肥、不噴農藥。" }
];

const beekeepingTimeline = [
  { year: "五十餘年", title: "爺爺在山裡與蜂孩子作伴", text: "翔勝養蜂的故事從苗栗頭份開始。爺爺深耕養蜂五十餘年，最喜歡在山裡照顧蜂群。" },
  { year: "童年", title: "爸爸和姑姑們跟著進山工作", text: "課餘時間，孩子們跟著爺爺、奶奶到山裡，學會找蜂王、夾蜂蟲、挖蜂王乳、收花粉與採蜂蜜。" },
  { year: "春分", title: "龍眼花開，蜂箱開始移動", text: "春分過後進入龍眼花季，一箱箱蜜蜂遷往台南山區，展開一年最重要的採蜜旅程。" },
  { year: "逐花", title: "由南往北，逐龍眼花蜜而居", text: "蜂農跟著花期移動，只為採集一年一收、濃郁香甜的龍眼花蜜。" },
  { year: "承接", title: "爸爸延續翔勝養蜂", text: "爺爺年事已高後，爸爸不捨一輩子養大的蜂群就此放棄，決定承接這份家業。" },
  { year: "未來", title: "蜜蜂不能消失，故事也不能斷", text: "蜜蜂對人類與土地都很重要。翔勝養蜂延續的不只是產業，也是人與自然互相依靠的生活方式。" }
];

const engineeringTimeline = [
  { year: "民國 75 年", title: "退伍後走進台北", text: "背著黃埔大背包從台北車站走出來，進入震旦關係企業代理日本理光影印機的事務儀器公司，從業務工作開始學社會。" },
  { year: "木柵", title: "一場飯局改變方向", text: "因台北市區房租昂貴搬到木柵租屋，透過房東同學牽線，辭去原工作進入旭峰茗茶學茶，準備南下台南開店。" },
  { year: "台南四年", title: "古都茶行與景氣反轉", text: "單身匹馬到台南找宿舍、徵員工，最多有五位門市人員，也曾在東帝士百貨設攤；後因母親往生、兒子出生與景氣急轉直下，面臨龐大租金與管銷壓力。" },
  { year: "回本行", title: "從測量重新開始", text: "回台北後透過瑞芳高工建築科同學介紹，到木柵線中華工程做測量，從箱尺、水準儀、測距儀重新站回工程現場。" },
  { year: "捷運局", title: "用穩定換家庭照顧", text: "穿著雨鞋從工地前往捷運工程處應徵，雖然薪資比營造廠少，仍選擇穩定與眷屬健保，從聘用技術員到納編工程員。" },
  { year: "民國 81 年", title: "板南線過河段", text: "參與萬華穿越大漢溪到板橋江子翠的捷運過河段工程，包含轉轍段、江翠國小前路橋拆除新建與潛盾施工風險處理。" },
  { year: "一家四口", title: "工作與家庭一起扛", text: "結婚生子後，太太在家照顧孩子，一家四口靠一份薪水生活；孩子才藝、補習、學費與長輩照護費，都是工程責任之外的另一份長期承擔。" },
  { year: "民國 82 年", title: "考取乙級安衛證照", text: "早期推動工地勞安不易，為了讓安全要求更有底氣，考取乙級勞工安全衛生技術士證照。" },
  { year: "品管現場", title: "退回六車錯誤混凝土", text: "清晨澆置前發現水泥型號不符合約，堅持暫停施工並等待確認，最後退回六輛預拌車，守住工程品質關卡。" },
  { year: "府中站", title: "面對地方疑慮與拆除衝突", text: "過河段完工後轉進新板橋車站與府中站工程，處理舊社區對隧道下穿房屋的疑慮，也經歷抗議與警力支援的現場壓力。" },
  { year: "民國 87 年", title: "支援北投機廠材料表單", text: "支援北投機廠材料試驗相關工作，將 P2 電腦格式表單程序轉成 Word 格式，半年後回到原單位。" },
  { year: "後續", title: "新莊蘆洲線與局本部安衛課", text: "板橋土城線完工通車後，工務所轉戰新莊蘆洲線；民國 93 年底支援局本部安衛課，延續工程與安全管理經驗。" },
  { year: "三十五年", title: "安全帽下的真實歲月", text: "城市捷運路網四通八達，工程技術一代一代更新；回頭看，人生不是聚光燈下完成，而是在工地、家庭與責任裡一步一步走完。" }
];

const flowerCalendar = [
  ["一月", "整理蜂具、觀察蜂勢，等待春天花訊。"],
  ["二月", "早春花開，開始記錄蜂群狀態。"],
  ["三月", "花期漸多，適合補蜜蜂入花照片。"],
  ["四月", "龍眼、荔枝等花源可依實際年份補充。"],
  ["五月", "採蜜與搖蜜季節，記錄工作流程。"],
  ["六月", "過濾、裝瓶、保存與分享蜂蜜故事。"],
  ["七月", "夏季照顧蜂群，注意天氣與蜜源。"],
  ["八月", "整理蜂場與蜂箱，補充山城日常。"],
  ["九月", "轉季觀察，記錄蜂群強弱。"],
  ["十月", "秋季花源與蜂農調整。"],
  ["十一月", "準備冬季管理與器具修補。"],
  ["十二月", "一年回顧，整理照片、影片、蜂蜜風味筆記。"]
];

const page = document.body.dataset.page;
const yearNode = document.querySelector("#year");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const backToTop = document.querySelector(".back-to-top");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("open");
  });
}

if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 420);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function renderGallery(targetId, filter = "all", limit = galleryItems.length) {
  const target = document.querySelector(`#${targetId}`);
  if (!target) return;

  const items = galleryItems
    .filter((item) => filter === "all" || item.category === filter)
    .slice(0, limit);

  target.innerHTML = items.map((item, index) => {
    const image = item.src
      ? `<img src="${item.src}" alt="${item.title}">`
      : `<div class="photo" aria-label="照片預留位置">${String(index + 1).padStart(2, "0")}</div>`;

    const itemIndex = galleryItems.indexOf(item);

    return `
      <article class="gallery-card">
        <button class="gallery-open" type="button" data-gallery-index="${itemIndex}" aria-label="打開照片：${item.title}">
          ${image}
        </button>
        <div>
          <h3>${item.title}</h3>
          <p>${item.note}</p>
          <small>${item.date}｜${item.place}｜${item.song}</small>
        </div>
      </article>
    `;
  }).join("");
}

function setupGalleryLightbox() {
  if (!document.querySelector(".gallery-grid")) return;

  const lightbox = document.createElement("div");
  lightbox.className = "gallery-lightbox";
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.innerHTML = `
    <div class="gallery-lightbox__backdrop" data-close-lightbox></div>
    <section class="gallery-lightbox__dialog" role="dialog" aria-modal="true" aria-labelledby="lightboxTitle">
      <button class="gallery-lightbox__close" type="button" aria-label="關閉照片" data-close-lightbox>×</button>
      <div class="gallery-lightbox__media">
        <img id="lightboxImage" alt="">
      </div>
      <div class="gallery-lightbox__content">
        <p class="eyebrow" id="lightboxCategory">生命相簿</p>
        <h2 id="lightboxTitle"></h2>
        <dl>
          <div><dt>日期</dt><dd id="lightboxDate"></dd></div>
          <div><dt>地點</dt><dd id="lightboxPlace"></dd></div>
          <div><dt>相關歌曲</dt><dd id="lightboxSong"></dd></div>
          <div><dt>GPS</dt><dd id="lightboxGps"></dd></div>
        </dl>
        <p id="lightboxNote"></p>
      </div>
    </section>
  `;
  document.body.appendChild(lightbox);

  const image = lightbox.querySelector("#lightboxImage");
  const category = lightbox.querySelector("#lightboxCategory");
  const title = lightbox.querySelector("#lightboxTitle");
  const date = lightbox.querySelector("#lightboxDate");
  const place = lightbox.querySelector("#lightboxPlace");
  const song = lightbox.querySelector("#lightboxSong");
  const gps = lightbox.querySelector("#lightboxGps");
  const note = lightbox.querySelector("#lightboxNote");
  const closeButton = lightbox.querySelector(".gallery-lightbox__close");

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    image.removeAttribute("src");
  }

  function openLightbox(item) {
    if (!item || !item.src) return;
    image.src = item.src;
    image.alt = item.title;
    category.textContent = item.category === "beekeeping" ? "翔勝養蜂相簿" : "故鄉與土角厝相簿";
    title.textContent = item.title;
    date.textContent = item.date;
    place.textContent = item.place;
    song.textContent = item.song;
    gps.textContent = item.gps;
    note.textContent = item.note;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    closeButton.focus();
  }

  document.addEventListener("click", (event) => {
    const openButton = event.target.closest(".gallery-open");
    if (openButton) {
      const index = Number(openButton.dataset.galleryIndex);
      openLightbox(galleryItems[index]);
      return;
    }

    if (event.target.closest("[data-close-lightbox]")) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("open")) {
      closeLightbox();
    }
  });
}

function renderArticles(targetId, filter = "all", limit = articleItems.length) {
  const target = document.querySelector(`#${targetId}`);
  if (!target) return;

  const items = articleItems
    .filter((item) => filter === "all" || item.category === filter)
    .slice(0, limit);

  target.innerHTML = items.map((item) => `
    <article class="article-card">
      <time datetime="${item.date}">${item.date}</time>
      <p class="tag">${item.tag}</p>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <a href="${item.link}">繼續閱讀</a>
    </article>
  `).join("");
}

function renderReflections(targetId, filter = "all", limit = reflectionItems.length) {
  const target = document.querySelector(`#${targetId}`);
  if (!target) return;

  const items = reflectionItems
    .filter((item) => filter === "all" || item.category === filter || item.category === "home")
    .slice(0, limit);

  target.innerHTML = items.map((item) => `
    <article class="reflection-card">
      <p>${item.text}</p>
    </article>
  `).join("");
}

function renderTimeline(targetId, items) {
  const target = document.querySelector(`#${targetId}`);
  if (!target) return;

  target.innerHTML = items.map((item) => `
    <article class="timeline-card">
      <span>${item.year}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function renderFlowerCalendar() {
  const target = document.querySelector("#flowerCalendar");
  if (!target) return;

  target.innerHTML = flowerCalendar.map(([month, text]) => `
    <article class="month-card">
      <strong>${month}</strong>
      <p>${text}</p>
    </article>
  `).join("");
}

function setupMusic() {
  const playlist = document.querySelector("#playlist");
  const audio = document.querySelector("#audioPlayer");
  const trackTitle = document.querySelector("#trackTitle");
  const trackMeta = document.querySelector("#trackMeta");
  const lyricsTitle = document.querySelector("#lyricsTitle");
  const lyricsText = document.querySelector("#lyricsText");

  if (!playlist || !audio || !trackTitle || !trackMeta || !lyricsTitle || !lyricsText) return;

  function selectTrack(track, button, shouldPlay = false) {
    document.querySelectorAll(".track-button").forEach((node) => node.classList.remove("active"));
    button.classList.add("active");
    trackTitle.textContent = track.title;
    trackMeta.textContent = `${track.artist}｜${track.story}`;
    lyricsTitle.textContent = track.title;
    lyricsText.textContent = track.lyrics;

    if (track.src) {
      audio.src = track.src;
      audio.removeAttribute("aria-label");
    } else {
      audio.removeAttribute("src");
      audio.setAttribute("aria-label", "尚未放入 MP3 檔案");
    }

    audio.load();

    if (shouldPlay && track.src) {
      audio.play().catch(() => {
        trackMeta.textContent = `${track.artist}｜${track.story}｜若瀏覽器阻擋自動播放，請再按播放器的播放鍵。`;
      });
    }
  }

  playlist.innerHTML = "";

  musicTracks.forEach((track, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "track-button";
    button.innerHTML = `<strong>${track.title}</strong><span>${track.artist}</span>`;
    button.addEventListener("click", () => selectTrack(track, button, true));
    playlist.appendChild(button);

    if (index === 0) selectTrack(track, button);
  });
}

function setupSearch() {
  const input = document.querySelector("#siteSearch");
  const results = document.querySelector("#searchResults");
  if (!input || !results) return;

  function updateResults() {
    const query = input.value.trim().toLowerCase();
    const matches = articleItems.filter((item) => {
      const haystack = `${item.title} ${item.tag} ${item.summary} ${item.keywords}`.toLowerCase();
      return query && haystack.includes(query);
    });

    if (!query) {
      results.innerHTML = "<p>輸入關鍵字後，會顯示相關文章。這是未來 AI 知識庫的第一步。</p>";
      return;
    }

    results.innerHTML = matches.length
      ? matches.map((item) => `<a href="${item.link}"><strong>${item.title}</strong><span>${item.summary}</span></a>`).join("")
      : "<p>目前沒有找到相關內容。之後新增文章時，記得補上 keywords。</p>";
  }

  input.addEventListener("input", updateResults);
  updateResults();
}

renderGallery("homeGallery", "all", 3);
renderGallery("childhoodGallery", "childhood");
renderGallery("engineeringGallery", "engineering");
renderGallery("beekeepingGallery", "beekeeping");
setupGalleryLightbox();
renderArticles("latestArticles", "all", 3);
renderArticles("beekeepingArticles", "beekeeping");
renderArticles("beeKnowledgeArticles", "knowledge");
renderArticles("allArticles", "all");
renderReflections("homeReflections", "all", 3);
renderReflections("childhoodReflections", "childhood", 3);
renderReflections("musicReflections", "music", 3);
renderReflections("allReflections", "all");
renderTimeline("oldHouseTimelineItems", oldHouseTimeline);
renderTimeline("beekeepingTimelineItems", beekeepingTimeline);
renderTimeline("engineeringTimeline", engineeringTimeline);
renderFlowerCalendar();
setupSearch();

if (page === "music") {
  setupMusic();
}
