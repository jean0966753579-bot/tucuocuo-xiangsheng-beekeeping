const activeSeason = "spring";
const seasonStorageKey = "tucuocuo-home-season";

const homeSeasons = {
  spring: {
    bodyClass: "spring",
    image: "assets/photos/web/old-house-spring-wisteria.jpg",
    alt: "春季紫藤花下的土埆厝與庭院",
    eyebrow: "春回美人山．老屋重新開花",
    title: "一串紫藤，喚醒土埆厝的春天",
    note: "春季封面",
    leadOne: "紫藤垂在屋簷前，花串、木柴、石牆與土埆牆一起接住春天的光。老屋沒有急著說話，只用一朵一朵花，把沉睡多年的記憶慢慢喚醒。",
    leadTwo: "從這一抹春色出發，網站把故鄉、養蜂、茶行與捷運工程串成一條回家的路。走過城市與工地，最後才懂得，真正值得留下的，是土地曾經給人的力量。"
  },
  summer: {
    bodyClass: "summer",
    image: "assets/photos/web/old-house-summer-window.jpg",
    alt: "夏季土埆厝木窗前的笑容與花盆",
    eyebrow: "夏日開窗．山風穿過老牆",
    title: "把窗打開，讓盛夏住進老屋",
    note: "夏季封面",
    leadOne: "木窗一開，笑容從土埆牆裡探出來，窗前的小花也跟著熱鬧。盛夏的老屋有蟬聲、有汗水，也有山風穿過門縫時，那種踏實又明亮的日常。",
    leadTwo: "這一季適合靠近生活本身：窗裡是家人的笑，窗外是農忙、蜂箱與一日比一日濃的光。人生不只在遠方發生，也在這些平凡的午後，悄悄長成自己的樣子。"
  },
  autumn: {
    bodyClass: "autumn",
    image: "assets/photos/web/old-house-autumn-friends.jpg",
    alt: "秋季朋友們在土埆厝前合影",
    eyebrow: "秋收相聚．把歲月釀成甜味",
    title: "人回到老屋，故事就有了收成",
    note: "秋季封面",
    leadOne: "朋友在老屋前排成一列，笑聲把庭院照亮。秋天最動人的，不只是作物成熟，而是走散過的時光，又在一張照片裡重新靠近。",
    leadTwo: "茶香、蜂蜜、工地歲月與家族記憶，到了秋天都像慢慢沉澱下來的味道。回頭看才知道，成熟不是抵達終點，而是把一路上的辛苦，整理成可以分享的溫柔。"
  },
  winter: {
    bodyClass: "winter",
    image: "assets/photos/web/old-house-winter-friends.jpg",
    alt: "冬季親友在土埆厝前合影留念",
    eyebrow: "冬日守望．老屋替家人留燈",
    title: "風冷的時候，記憶反而更暖",
    note: "冬季封面",
    leadOne: "冬日外套與圍巾站在老屋前，背景是安靜的屋瓦與土牆。冷風把聲音放輕，反而讓家族、炊煙、老照片與那些不必說出口的牽掛，變得更清楚。",
    leadTwo: "冬天適合回望，也適合收藏。看工程現場、蜂場花期、茶香與老物件，才看見一個家如何在山海之間把時間留下，等下一個春天，再把門慢慢打開。"
  }
};

const galleryItems = [
  {
    title: "蝶豆花與土埆厝午後",
    category: "home",
    src: "assets/photos/web/shared-butterfly-pea-old-house.jpg",
    date: "待補",
    place: "金山美人山下土角厝",
    gps: "待補",
    song: "土埆厝的燈火",
    note: "竹篩裡盛著紫色蝶豆花，前方木桌、後方土埆厝與盆栽一起構成午後的農家生活畫面。"
  },
  {
    title: "柚香與老屋庭院",
    category: "home",
    src: "assets/photos/web/shared-pomelo-old-house-courtyard.jpg",
    date: "待補",
    place: "金山美人山下土角厝",
    gps: "待補",
    song: "三餐四季",
    note: "木桌上的柚子、庭院裡的紅色木輪車與土埆厝牆面，記錄收成與老屋日常。"
  },
  {
    title: "雨後田園遠望",
    category: "home",
    src: "assets/photos/web/shared-field-water-view.jpg",
    date: "待補",
    place: "美人山下田園",
    gps: "待補",
    song: "美人山下的風",
    note: "從山邊望向水田、聚落與遠山，雨後雲層讓田園景色更安靜，也保留了土地的開闊感。"
  },
  {
    title: "美人山下的綠意人家",
    category: "home",
    src: "assets/photos/web/shared-meiren-mountain-house.jpg",
    date: "待補",
    place: "美人山下",
    gps: "待補",
    song: "美人山下",
    note: "青山、藍天與山腳下的人家連成一幅安靜的風景，適合放在分享照片區作為自然與家園的開場。"
  },
  {
    title: "田園遠望與綠瓶小景",
    category: "home",
    src: "assets/photos/web/shared-field-view-green-bottle.jpg",
    date: "待補",
    place: "田園眺望處",
    gps: "待補",
    song: "自己的風景",
    note: "從高處遠望田園、水池與山線，前景的綠瓶讓這張照片多了一點生活片刻的輕鬆感。"
  },
  {
    title: "花博入口的家人合影",
    category: "flora-expo",
    src: "assets/photos/web/flora-expo/flora-expo-entrance-family-2011-02-12.jpg",
    date: "2011-02-12",
    place: "2010 臺北國際花卉博覽會",
    gps: "台北市",
    song: "城市花開時，我在現場",
    note: "2011 年 2 月 12 日，家人在花博入口綠牆與標誌前合影。那一天的重點不只是到此一遊，而是一家人一起站在城市盛會的入口，替民國百年前後的台北留下共同記憶。"
  },
  {
    title: "入口綠牆前的寬景",
    category: "flora-expo",
    src: "assets/photos/web/flora-expo/flora-expo-entrance-family-wide-2011-02-12.jpg",
    date: "2011-02-12",
    place: "2010 臺北國際花卉博覽會",
    gps: "台北市",
    song: "城市花開時，我在現場",
    note: "這張寬景保留了入口人潮、植栽綠牆與花博字樣，也保留了準備走進展區前的期待。人很多，天氣帶著一點涼意，但那份熱鬧正是花博最鮮明的開場。"
  },
  {
    title: "展館草坡前留影",
    category: "flora-expo",
    src: "assets/photos/web/flora-expo/flora-expo-pavilion-lawn-2011-04-26.jpg",
    date: "2011-04-26",
    place: "2010 臺北國際花卉博覽會",
    gps: "台北市",
    song: "城市花開時，我在現場",
    note: "2011 年 4 月 26 日再到展區，站在展館草坡與遊客動線前留影。照片裡的綠屋頂、坡道與往來人潮，讓花博不只是花景，也是一個需要被妥善維持的公共空間。"
  },
  {
    title: "花田前的工作身影",
    category: "flora-expo",
    src: "assets/photos/web/flora-expo/flora-expo-flower-field-2011-04-26.jpg",
    date: "2011-04-26",
    place: "2010 臺北國際花卉博覽會",
    gps: "台北市",
    song: "城市花開時，我在現場",
    note: "花田一路鋪向展館，人潮在步道上流動。對一般遊客來說是賞花，對支援勤務的人來說，還會多看見動線、標示、入口與現場秩序，這就是另一種工程人的眼光。"
  },
  {
    title: "與花博吉祥物合照",
    category: "flora-expo",
    src: "assets/photos/web/flora-expo/flora-expo-mascot-2011-04-26.jpg",
    date: "2011-04-26",
    place: "2010 臺北國際花卉博覽會",
    gps: "台北市",
    song: "城市花開時，我在現場",
    note: "與花博吉祥物合照，是這組照片裡最輕鬆的一格。公共活動有嚴肅的勤務與規劃，也需要這樣親切的角色，讓人記得城市辦活動時也可以有笑容。"
  },
  {
    title: "彩色花帶中的笑容",
    category: "flora-expo",
    src: "assets/photos/web/flora-expo/flora-expo-colorful-flowerbed-2011-04-26.jpg",
    date: "2011-04-26",
    place: "2010 臺北國際花卉博覽會",
    gps: "台北市",
    song: "城市花開時，我在現場",
    note: "黃、桃紅與綠色花帶在身後鋪開，像把整座城市的節慶感都集中在一片花園裡。照片裡的笑容提醒自己：曾經有一段時間，台北真的用花迎接世界。"
  },
  {
    title: "大理花園旁的片刻",
    category: "flora-expo",
    src: "assets/photos/web/flora-expo/flora-expo-dahlia-garden-2011-04-26.jpg",
    date: "2011-04-26",
    place: "2010 臺北國際花卉博覽會",
    gps: "台北市",
    song: "城市花開時，我在現場",
    note: "坐在花園旁，身後是層層花色與往來遊客。這不是正式的工作照，卻像忙碌勤務中短暫停下的一格，把花博的色彩和當時的自己一起留下來。"
  },
  {
    title: "展區步道與綠屋頂",
    category: "flora-expo",
    src: "assets/photos/web/flora-expo/flora-expo-expo-park-walkway-2011-04-26.jpg",
    date: "2011-04-26",
    place: "2010 臺北國際花卉博覽會",
    gps: "台北市",
    song: "城市花開時，我在現場",
    note: "步道、草坡、綠屋頂與遊客動線，完整保留花博展區的空間感。這張照片適合作為收尾，因為它看見的不只是人像，而是一座城市如何把自然、建築與人潮組織在一起。"
  },
  {
    title: "2004 年修復前的荒廢庭院",
    category: "childhood",
    src: "assets/photos/web/old-house-before-2004-collapsed-courtyard.jpg",
    date: "2004-04-03",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "美人山下",
    note: "修復前的庭院雜草與花草並生，倒塌木樑、竹竿與土角牆交錯，留下老屋荒廢時期的珍貴影像。"
  },
  {
    title: "2004 年修復前的鐵窗與老牆",
    category: "childhood",
    src: "assets/photos/web/old-house-before-2004-window-bars.jpg",
    date: "2004-04-03",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "修舊如舊",
    note: "斑駁土牆、紅磚窗框、鏽蝕鐵窗與屋內堆放物，記錄修復前生活痕跡仍留在屋內的樣貌。"
  },
  {
    title: "2004 年修復前的側牆與屋瓦",
    category: "childhood",
    src: "assets/photos/web/old-house-before-2004-side-wall.jpg",
    date: "2004-04-03",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "北海鄉情",
    note: "側面牆身可見大片剝落與土角磚外露，屋瓦高低不整，呈現老屋尚未整修前的原始狀態。"
  },
  {
    title: "2004 年修復前的外牆與老窗",
    category: "childhood",
    src: "assets/photos/web/old-house-before-2004-sepia-front-wall.jpg",
    date: "2004-04-03",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "美人山下的風",
    note: "老窗上方的土角牆已局部崩落，屋瓦覆滿歲月痕跡，見證土角厝等待修復的時刻。"
  },
  {
    title: "2004 年修復前的土角側牆",
    category: "childhood",
    src: "assets/photos/web/old-house-before-2004-sepia-side-wall.jpg",
    date: "2004-04-03",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "修舊如舊",
    note: "側牆表面龜裂斑駁，土角磚層次清楚可見，保留老屋最樸實的構造記憶。"
  },
  {
    title: "2004 年修復前的屋頂與入口",
    category: "childhood",
    src: "assets/photos/web/old-house-before-2004-sepia-roof-entry.jpg",
    date: "2004-04-03",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "老屋重生",
    note: "屋頂瓦片已有破損與苔痕，門口木柱撐起入口，也看得見修復前仍保留的傳統屋身比例。"
  },
  {
    title: "2004 年修復前的山牆與青苔屋頂",
    category: "childhood",
    src: "assets/photos/web/old-house-before-2004-gable-roof.jpg",
    date: "2004-04-03",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "美人山下",
    note: "山牆土角磚裸露，屋頂覆著青苔與老瓦，遠處田野與人影讓老屋和土地關係更加清楚。"
  },
  {
    title: "2004 年修復前的青苔屋瓦與窗牆",
    category: "childhood",
    src: "assets/photos/web/old-house-before-2004-moss-roof-window.jpg",
    date: "2004-04-03",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "北海鄉情",
    note: "屋瓦上厚厚青苔與剝落牆面相互映照，是土角厝修復前最有歲月感的一組紀錄。"
  },
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
    title: "老屋前的家族合影",
    category: "childhood",
    src: "assets/photos/web/old-house-family-reunion-front.jpg",
    date: "待補",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "山海之間",
    note: "一家人在修復後的土角厝前合影，老牆、屋瓦與人的笑容站在一起，讓百年老屋不只是建築，也成了家族相聚的所在。"
  },
  {
    title: "紅磚屋內的團圓餐桌",
    category: "childhood",
    src: "assets/photos/web/old-house-family-banquet.jpg",
    date: "待補",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "三合院的笑聲",
    note: "屋內紅磚牆與滿桌菜餚圍住一場團圓，這樣的照片把老屋修復後重新聚人的溫度留下來。"
  },
  {
    title: "兄弟坐看金山山海",
    category: "childhood",
    src: "assets/photos/web/old-house-brothers-overlook.jpg",
    date: "待補",
    place: "金山美人山下",
    gps: "概略位置待補",
    song: "北海鄉情",
    note: "四人坐在山坡欄前，身後是田畦、城鎮與遠山。這一眼望出去，像把離鄉、返鄉與守望都收進同一幅風景。"
  },
  {
    title: "暮色裡亮起燈的土角厝",
    category: "childhood",
    src: "assets/photos/web/old-house-restored-evening.jpg",
    date: "待補",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "夜裡的故鄉",
    note: "傍晚山色漸暗，屋內燈光從木窗透出來。土角厝在暮色中安靜發亮，像一盞替家人等門的燈。"
  },
  {
    title: "修復土角牆的泥作現場",
    category: "childhood",
    src: "assets/photos/web/old-house-restoration-mud-wall-01.jpg",
    date: "待補",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "修舊如舊",
    note: "簡家兄弟踩在老木料上補砌土角牆，泥水、磚石與汗水交在一起，記錄他們自行修復土埆厝最辛苦也最實在的工序。"
  },
  {
    title: "一磚一土補回家的形狀",
    category: "childhood",
    src: "assets/photos/web/old-house-restoration-mud-wall-02.jpg",
    date: "待補",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "老屋重生",
    note: "簡家老二戴著斗笠在遞傳舊土磚，簡家小弟站在木頭堆砌修復舊土磚。老屋不是一次完成的，而是靠兄弟一磚一土慢慢接回家的形狀。"
  },
  {
    title: "修復前的屋身與山林",
    category: "childhood",
    src: "assets/photos/web/old-house-before-2016-front.jpg",
    date: "待補",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "美人山下",
    note: "修復前的牆面斑駁、門窗暫封，屋後仍是濃綠山林。這張照片保留了老屋等待整理、等待被重新看見的時刻。"
  },
  {
    title: "紅磚牆上的斗笠與農具",
    category: "childhood",
    src: "assets/photos/web/old-house-farm-tools-hats.jpg",
    date: "待補",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "農家的孩子",
    note: "斗笠掛在紅磚牆上，旁邊還有舊農具與月曆。這些不是裝飾，而是農家日常留下的手感與時間。"
  },
  {
    title: "牆上的古早耙具",
    category: "childhood",
    src: "assets/photos/web/old-house-farm-rake.jpg",
    date: "待補",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "農家的孩子",
    note: "老耙具掛在紅磚牆前，鐵齒與木柄留下使用過的痕跡，像把上一代人的力氣靜靜收在牆上。"
  },
  {
    title: "紅磚牆上的舊犁具",
    category: "childhood",
    src: "assets/photos/web/old-house-old-plow.jpg",
    date: "待補",
    place: "金山美人山下土角厝",
    gps: "概略位置待補",
    song: "水水田莊",
    note: "舊犁具高掛屋內，木頭與鐵件都有歲月磨出的顏色。它提醒人記得，這一棟老屋曾經連著田、牛、泥土與一家人的生計。"
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
    title: "品茗桌旁的年輕歲月",
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
    title: "旭峰茗茶照片 01",
    category: "engineering",
    src: "assets/photos/web/tea-shop-xufeng-img-1055.jpg",
    date: "待補",
    place: "旭峰茗茶",
    gps: "待補",
    song: "茶香歲月",
    note: "從 Google Drive「旭峰茗茶」資料夾加入的茶行照片，補上茶行歲月的現場記憶。"
  },
  {
    title: "旭峰茗茶照片 03",
    category: "engineering",
    src: "assets/photos/web/tea-shop-xufeng-img-9136.jpg",
    date: "待補",
    place: "旭峰茗茶",
    gps: "待補",
    song: "茶香歲月",
    note: "茶行照片延伸了原本的品茗桌記錄，讓這段生活經驗更完整。"
  },
  {
    title: "旭峰茗茶照片 06",
    category: "engineering",
    src: "assets/photos/web/tea-shop-xufeng-5.jpg",
    date: "待補",
    place: "旭峰茗茶",
    gps: "待補",
    song: "茶香歲月",
    note: "茶行裡的日常畫面，讓這段茶香歲月不只停在一兩張照片。"
  },
  {
    title: "旭峰茗茶照片 07",
    category: "engineering",
    src: "assets/photos/web/tea-shop-xufeng-img-0244.jpg",
    date: "待補",
    place: "旭峰茗茶",
    gps: "待補",
    song: "茶香歲月",
    note: "茶行舊影持續補齊，讓網站相簿更接近完整的生活紀錄。"
  },
  {
    title: "旭峰茗茶照片 08",
    category: "engineering",
    src: "assets/photos/web/tea-shop-xufeng-img-0247.jpg",
    date: "待補",
    place: "旭峰茗茶",
    gps: "待補",
    song: "茶香歲月",
    note: "從茶具、空間到人的身影，都是茶行故事的一部分。"
  },
  {
    title: "旭峰茗茶照片 09",
    category: "engineering",
    src: "assets/photos/web/tea-shop-xufeng-img-0248.jpg",
    date: "待補",
    place: "旭峰茗茶",
    gps: "待補",
    song: "茶香歲月",
    note: "茶行照片加入後，工程人生之外的生活面貌也更清楚。"
  },
  {
    title: "旭峰茗茶照片 10",
    category: "engineering",
    src: "assets/photos/web/tea-shop-xufeng-img-0250.jpg",
    date: "待補",
    place: "旭峰茗茶",
    gps: "待補",
    song: "茶香歲月",
    note: "這張照片與既有茶行相簿互相呼應，保留一段茶香與人情的記憶。"
  },
  {
    title: "旭峰茗茶照片 11",
    category: "engineering",
    src: "assets/photos/web/tea-shop-xufeng-img-0240.jpg",
    date: "待補",
    place: "旭峰茗茶",
    gps: "待補",
    song: "茶香歲月",
    note: "Google Drive 裡的旭峰茗茶照片已存入網站，用實體圖片呈現在相簿中。"
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
    title: "隧道軌道與鋼構支撐",
    category: "engineering",
    src: "assets/photos/web/metro-worksite/metro-worksite-tunnel-track-curve.jpg",
    date: "待補",
    place: "捷運工程隧道內",
    gps: "待補",
    song: "地下鐵的光",
    note: "彎道、軌道與連續鋼構支撐一路往隧道深處延伸，呈現地下工程最直接的空間感與壓迫感。"
  },
  {
    title: "通風豎井裡的安全帽隊伍",
    category: "engineering",
    src: "assets/photos/web/metro-worksite/metro-worksite-shaft-safety-team.jpg",
    date: "待補",
    place: "捷運工程豎井現場",
    gps: "待補",
    song: "工程人生",
    note: "一群工程人站在昏暗的豎井裡，反光背心與安全帽成為現場最醒目的標誌；這是工地巡查、協調與責任的日常。"
  },
  {
    title: "潛盾機前的工務合影",
    category: "engineering",
    src: "assets/photos/web/metro-worksite/metro-worksite-shield-machine-group-1994.jpg",
    date: "1994-11",
    place: "捷運潛盾工程現場",
    gps: "待補",
    song: "工程人生",
    note: "工務夥伴在潛盾機前合影，照片上留下 1994 年 11 月的時間記號，也留下台北捷運地下工程推進中的一頁。"
  },
  {
    title: "市縣交界與河面下三十米",
    category: "engineering",
    src: "assets/photos/web/metro-worksite/metro-worksite-city-county-boundary-sign.jpg",
    date: "待補",
    place: "台北市與台北縣交界地下工程",
    gps: "待補",
    song: "地下鐵的光",
    note: "標示牌寫著市縣交界與河面下 30 公尺，提醒這段工程不是普通隧道，而是在河床與城市邊界下方完成的艱難任務。"
  },
  {
    title: "2007 年隧道施工現場",
    category: "engineering",
    src: "assets/photos/web/metro-worksite/metro-worksite-tunnel-portrait-2007.jpg",
    date: "2007-07-19",
    place: "捷運隧道施工現場",
    gps: "待補",
    song: "安全帽下的三十五年",
    note: "安全帽、反光背心、施工車輛與隧道照明，記錄 2007 年夏天仍在地下現場奔走的工程身影。"
  },
  {
    title: "機場旁工地巡查合影",
    category: "engineering",
    src: "assets/photos/web/metro-worksite/metro-worksite-airport-side-team.jpg",
    date: "待補",
    place: "捷運工程工地",
    gps: "待補",
    song: "工程人生",
    note: "工務團隊站在開闊場域旁合影，安全帽與反光背心背後，是巡查、監造與現場協調累積出的默契。"
  },
  {
    title: "高架橋下的工務團隊",
    category: "engineering",
    src: "assets/photos/web/metro-worksite/metro-worksite-viaduct-team.jpg",
    date: "待補",
    place: "捷運高架工程現場",
    gps: "待補",
    song: "工程人生",
    note: "高架橋、紅色棚架與一整排安全帽，留下工程團隊在現場共同完成任務的畫面。"
  },
  {
    title: "茶畫下的奉茶時刻",
    category: "engineering",
    src: "assets/photos/web/tea-service-portrait.jpg",
    date: "2019-11-11",
    place: "茶行",
    gps: "待補",
    song: "茶香歲月",
    note: "品茗桌前的身影，把台灣茶、紫砂壺與待客的溫度留在同一張照片裡。"
  },
  {
    title: "年輕歲月，第一次把蜂脾捧在手上",
    category: "beekeeping",
    src: "assets/photos/web/beekeeping-young-frame-portrait.jpg",
    date: "早年留影",
    place: "山林蜂場",
    gps: "待補",
    song: "守望蜂鄉",
    note: "年輕時跟著老丈人走進山林、學著照看蜂群。手中沉甸甸的蜂脾，是養蜂生活的起點，也是半生假日追蜂尋蜜的珍貴見證。"
  },
  {
    title: "在工地與山野之間，嚐一口剛割下的蜂蜜",
    category: "beekeeping",
    src: "assets/photos/web/beekeeping-apiary-honey-tasting.jpg",
    date: "蜂場留影",
    place: "翔勝養蜂蜂場",
    gps: "待補",
    song: "山腳下的蜜香",
    note: "假日回到林間蜂場，蜂農抽脾、燻煙，我在一旁嚐著新鮮蜂蜜。工程師與養蜂人的斜槓人生，就在工地與山野之間慢慢展開。"
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
    title: "翔勝養蜂園的蜂箱",
    category: "beekeeping",
    src: "assets/photos/web/beekeeping-xiangsheng-boxes.jpg",
    date: "待補",
    place: "翔勝養蜂園",
    gps: "待補",
    song: "山城蜂路",
    note: "白色蜂箱散落在樹下，箱身上的翔勝養蜂園字樣，讓家族故事有了清楚的地標。"
  },
  {
    title: "搬運蜂蜜桶的現場",
    category: "beekeeping",
    src: "assets/photos/web/beekeeping-xiangsheng-honey-drum-delivery.jpg",
    date: "待補",
    place: "翔勝養蜂",
    gps: "待補",
    song: "一瓶蜂蜜",
    note: "蜂蜜桶從門口搬入，旁邊可見蜂蜜產品與作業工具，記錄養蜂工作從山林到店面的接續。"
  },
  {
    title: "手持蜂脾的採蜜身影",
    category: "beekeeping",
    src: "assets/photos/web/beekeeping-xiangsheng-honeycomb-frame-portrait.jpg",
    date: "待補",
    place: "翔勝養蜂蜂場",
    gps: "待補",
    song: "一瓶蜂蜜",
    note: "手持蜂脾站在蜂箱旁，蜂群飛舞其中，呈現採蜜現場最直接的工作畫面。"
  },
  {
    title: "開箱查看蜂脾",
    category: "beekeeping",
    src: "assets/photos/web/beekeeping-xiangsheng-open-hive-frame.jpg",
    date: "待補",
    place: "翔勝養蜂蜂場",
    gps: "待補",
    song: "山城蜂路",
    note: "蜂箱打開後抽出蜂脾檢查，身旁的蜂農與工具讓採蜜流程更完整。"
  },
  {
    title: "扛起蜂箱的蜂農",
    category: "beekeeping",
    src: "assets/photos/web/beekeeping-xiangsheng-carrying-hive-boxes.jpg",
    date: "待補",
    place: "翔勝養蜂蜂場",
    gps: "待補",
    song: "山腳下的蜜香",
    note: "蜂農戴著面網在林間搬運蜂箱，蜂群環繞，保留蜂場勞動的重量與節奏。"
  },
  {
    title: "蜂箱前整理蜂脾",
    category: "beekeeping",
    src: "assets/photos/web/beekeeping-xiangsheng-checking-frames.jpg",
    date: "待補",
    place: "翔勝養蜂蜂場",
    gps: "待補",
    song: "守望蜂鄉",
    note: "兩位蜂農在蜂箱前整理蜂脾與巢框，這是採蜜前後最細緻也最耗工的環節。"
  },
  {
    title: "林間蜂場作業",
    category: "beekeeping",
    src: "assets/photos/web/beekeeping-xiangsheng-apiary-work.jpg",
    date: "待補",
    place: "翔勝養蜂蜂場",
    gps: "待補",
    song: "守望蜂鄉",
    note: "蜂箱散布在樹林裡，蜂農分工檢查蜂脾與蜂箱，呈現山林蜂場的工作環境。"
  },
  {
    title: "煙燻與抽框",
    category: "beekeeping",
    src: "assets/photos/web/beekeeping-xiangsheng-smoker-and-frames.jpg",
    date: "待補",
    place: "翔勝養蜂蜂場",
    gps: "待補",
    song: "山城蜂路",
    note: "一邊使用煙燻器安撫蜂群，一邊抽出巢框檢查，記錄蜂場作業的關鍵步驟。"
  },
  {
    title: "三人協力採蜜",
    category: "beekeeping",
    src: "assets/photos/web/beekeeping-xiangsheng-three-person-harvest.jpg",
    date: "待補",
    place: "翔勝養蜂蜂場",
    gps: "待補",
    song: "山腳下的蜜香",
    note: "三位蜂農圍在蜂箱旁分工處理巢框，蜂群飛舞中看見家族產業的協力。"
  },
  {
    title: "蜂脾近照與蜂農",
    category: "beekeeping",
    src: "assets/photos/web/beekeeping-xiangsheng-honeycomb-close-portrait.jpg",
    date: "待補",
    place: "翔勝養蜂蜂場",
    gps: "待補",
    song: "一瓶蜂蜜",
    note: "近距離看見蜂脾上的蜂蜜與蜂群，也看見蜂農長年累積的熟練與穩定。"
  },
  {
    title: "林蔭下的翔勝蜂箱",
    category: "beekeeping",
    src: "assets/photos/web/beekeeping-xiangsheng-woodland-apiary-wide.jpg",
    date: "待補",
    place: "翔勝養蜂蜂場",
    gps: "待補",
    song: "山城蜂路",
    note: "蜂箱整齊分布在林蔭下，落葉、樹幹與白色蜂箱構成翔勝養蜂的典型蜂場環境。"
  },
  {
    title: "林間搬運蜂箱",
    category: "beekeeping",
    src: "assets/photos/web/beekeeping-xiangsheng-carrying-covered-boxes.jpg",
    date: "待補",
    place: "翔勝養蜂蜂場",
    gps: "待補",
    song: "守望蜂鄉",
    note: "蜂農戴著面網搬運覆布蜂箱，背景可見一整片蜂場與煙霧，記錄蜂場日常調度。"
  },
  {
    title: "多人分工檢查蜂脾",
    category: "beekeeping",
    src: "assets/photos/web/beekeeping-xiangsheng-team-frame-check.jpg",
    date: "待補",
    place: "翔勝養蜂蜂場",
    gps: "待補",
    song: "山腳下的蜜香",
    note: "蜂農們在多個蜂箱旁分工查看蜂脾，蜂群飛舞中呈現採蜜與檢查作業的密度。"
  },
  {
    title: "蜂場採蜜作業線",
    category: "beekeeping",
    src: "assets/photos/web/beekeeping-xiangsheng-team-harvest-line.jpg",
    date: "待補",
    place: "翔勝養蜂蜂場",
    gps: "待補",
    song: "山城蜂路",
    note: "多位蜂農在蜂箱間同步作業，有人抽框、有人處理蜂脾，保留採蜜現場的完整工作線。"
  },
  {
    title: "林下蜂箱全景",
    category: "beekeeping",
    src: "assets/photos/web/beekeeping-xiangsheng-forest-apiary-overview.jpg",
    date: "待補",
    place: "翔勝養蜂蜂場",
    gps: "待補",
    song: "守望蜂鄉",
    note: "從較遠視角看見蜂箱散布在樹林間，呈現蜂場規模與自然環境的關係。"
  },
  {
    title: "蜂箱口聚集的蜜蜂",
    category: "beekeeping",
    src: "assets/photos/web/beekeeping-xiangsheng-bees-on-box-close.jpg",
    date: "待補",
    place: "翔勝養蜂蜂場",
    gps: "待補",
    song: "一瓶蜂蜜",
    note: "近看蜂箱口聚集的蜜蜂，能清楚感受到蜂群活動與蜂場生命力。"
  },
  {
    title: "滿框蜂蜜與蜂箱",
    category: "beekeeping",
    src: "assets/photos/web/beekeeping-xiangsheng-honey-frame-and-box.jpg",
    date: "待補",
    place: "翔勝養蜂蜂場",
    gps: "待補",
    song: "一瓶蜂蜜",
    note: "蜂脾靠在蜂箱前，巢房裡可見深淺不同的蜜色，也能看見蜂群聚集在箱蓋與巢脾周圍。"
  },
  {
    title: "打開蜂箱的野巢脾",
    category: "beekeeping",
    src: "assets/photos/web/beekeeping-xiangsheng-open-box-wild-comb.jpg",
    date: "待補",
    place: "翔勝養蜂蜂場",
    gps: "待補",
    song: "山城蜂路",
    note: "蜂箱打開後可見自然垂掛的巢脾與密集蜂群，記錄蜂群在箱內築巢的真實狀態。"
  },
  {
    title: "貨車載運翔勝蜂箱",
    category: "beekeeping",
    src: "assets/photos/web/beekeeping-xiangsheng-truck-loaded-boxes.jpg",
    date: "待補",
    place: "翔勝養蜂蜂場",
    gps: "待補",
    song: "山腳下的蜜香",
    note: "貨車上整齊堆疊翔勝養蜂蜂箱，呈現蜂箱移動、轉場與蜂場調度的工作面。"
  },
  {
    title: "夜間載運蜂箱",
    category: "beekeeping",
    src: "assets/photos/web/beekeeping-xiangsheng-night-truck-boxes.jpg",
    date: "待補",
    place: "翔勝養蜂",
    gps: "待補",
    song: "守望蜂鄉",
    note: "夜間貨車上綁妥的蜂箱，補上養蜂工作中搬運、等待與轉場的另一種現場。"
  }
];

const articleItems = [
  {
    title: "城市花開時，我在現場",
    date: "2026-07-14",
    tag: "台北花博勤務",
    category: "engineering",
    summary: "從花博入口合影、展區花景到勤務視角，記下台北首次申辦世界花卉博覽會時，一位公共工程人親身看見的城市秩序、現場責任與家庭記憶。",
    link: "stories.html#taipeiFloraExpo",
    keywords: "台北 花博 世界花卉博覽會 勤務 支援 花景 展區 人潮 城市記憶 短片 影片 花絮"
  },
  {
    title: "北海鄉情．山海茶路",
    date: "2026-07-05",
    tag: "山海茶路",
    category: "life",
    summary: "從金山佃農歲月、父親總舖師的灶爐記憶，到山海古道、苗栗翔勝養蜂與工程師的歸鄉路，整理成一篇把故鄉與人生牽在一起的主題文章。",
    link: "stories.html#beihaiTeaRoad",
    keywords: "北海鄉情 山海茶路 金山 佃農 總舖師 北海岸 古道 茶路 農產 苗栗 翔勝養蜂 女婿 假日蜂農 柑橘 檸檬 工程師 退休 歸鄉"
  },
  {
    title: "安全帽下的三十五年",
    date: "2026-06-30",
    tag: "生命誌",
    category: "engineering",
    summary: "從金山鄉下長大的孩子，到退伍後北上討生活，歷經震旦業務、台南茶行、土木工程與台北捷運興建年代；安全帽下，是三十五年工作責任，也是一個家的重量。",
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
    title: "和田玉收藏小天地",
    date: "2026-06-28",
    tag: "收藏館",
    category: "collection",
    summary: "十多年和田玉收藏經驗，另以專屬網站整理籽料、玉質、工藝與收藏心得。",
    link: "https://jean0966753579-bot.github.io/jianhetian-collection/",
    keywords: "和田玉 和闐玉 籽料 玉質 工藝 收藏 台灣茶 紫砂壺 老照片 老農具 老地圖"
  }
];

const reflectionItems = [
  { category: "childhood", text: "一畝休耕水田倒映著藍天白雲，也把奔波多年的人，暫時安放回土地的懷裡。" },
  { category: "childhood", text: "修舊如舊，不只是修一棟房子；是替祖先、替家人，也替自己留一條回家的路。" },
  { category: "life", text: "背著黃埔大背包走出台北車站時，少年還不知道，人生真正的報到才剛開始。" },
  { category: "life", text: "茶行的香、工地的灰、捷運隧道的光，後來都成為同一條回家的路。" },
  { category: "life", text: "品質關卡守住了，工程才有資格往下一站前進。" },
  { category: "life", text: "工程人在工地扛的是鋼筋水泥，回到家扛的是一整個家庭。" },
  { category: "life", text: "城市花開時，站在勤務現場的人，也替那一段時代留下了自己的角度。" },
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
    src: "assets/music/北海鄉情．山海茶路.mp3",
    cover: "",
    story: "依據金山土埆厝、山海古道、茶行歲月、翔勝養蜂與工程師歸鄉路改編的主題歌曲。",
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

const downloadedMusicTracks = [
  "美人山下的鐘擺.mp3",
  "留給一朵花的時間.mp3",
  "金包里的回甘.mp3",
  "一葉一心.mp3",
  "百年土埆厝的茶湯.mp3",
  "土埆厝的燈火.mp3",
  "把汗水釀成歲月芬芳.mp3"
];

const musicNarratives = {
  "北海鄉情．山海茶路": "從北海岸依山傍海的地景出發，唱出金山佃農歲月、山海古道、茶香記憶與苗栗翔勝養蜂的連結。最後回到工程師渴望歸鄉、親近土地的心境，是整個網站最能統整山海、家族與人生下半場的一首主題歌。",
  "山腳下的蜜香": "從山腳、花開與蜂箱出發，把蜂農一年一年的守候唱成蜜香。這首歌適合放在翔勝養蜂的故事旁，讓人先聽見土地給出的甜。",
  "美人山下的月桃花": "月桃花香牽回老屋、山風與童年記憶。歌曲的重點不是懷舊而已，而是把美人山下的家，慢慢唱成心裡可以回去的地方。",
  "人生親像蜜香紅茶": "用蜜香紅茶比喻人生滋味：入口有甜，也有時間沉澱後的回甘。茶香裡藏著轉折、承擔與越走越穩的心境。",
  "玉米田的約定": "玉米田象徵童年、家族與土地裡還在發芽的承諾。那些說過的話沒有消失，只是換成風裡的作物，繼續陪人長大。",
  "醉蜂鬧山頭": "花期一到，蜂群與山頭一起熱鬧起來。這首歌帶著畫面感，把採蜜季節唱得輕快、明亮，也唱出蜂農靠天吃飯的節奏。",
  "心才有地方曬太陽": "這首歌把家與土地寫成心可以曬太陽的地方。人在辛苦之後還能往前，是因為心裡仍留著一塊溫暖、透光的所在。",
  "美人山下的風": "風從美人山吹過老屋，也把回家的路吹回心裡。歌曲的核心是故鄉不是遠方風景，而是每次想起都能安定人的方向。",
  "願意拍手的人": "寫給一路願意鼓勵、支持與陪伴的人。掌聲不是熱鬧而已，而是在低潮時提醒人，還有人看見你的努力。",
  "袂遮去我的天": "帶有台語語感，唱的是風雨過後仍然看得見天空。它適合放在人生低谷與重新站起來的段落，簡單但有力。",
  "守望蜂鄉": "守一季花開，也守一家人的希望。歌曲把翔勝養蜂的核心唱出來：蜂蜜的甜，來自花，也來自人長時間的照顧。",
  "金山土埆厝": "以金山、美人山與百年土埆厝為中心，唱出老屋站在山海之間的安定感。這是整個網站最重要的故鄉主題之一。",
  "美人山腳下的炊煙": "炊煙慢慢升起，像有人在老家叫人回來吃飯。這首歌把家的味道寫得很具體，也把童年飯香留在旋律裡。",
  "慢慢走，花會開": "給自己也給家人的溫柔提醒：不用急，日子會帶人到該去的地方。它是整組生命歌曲裡最安靜、也最能陪人的一首。",
  "美人山下的鐘擺": "鐘擺像時間，也像人在故鄉與遠方之間來回。歌曲適合表達歲月推移、人生回望，以及最後仍回到美人山下的心情。",
  "留給一朵花的時間": "這首歌提醒人把腳步放慢，給一朵花、也給自己一點時間。它把等待寫得不沉重，而是像花期一樣自然到來。",
  "金包里的回甘": "以金包里與回甘作為意象，連起地方記憶、茶湯滋味與人生後勁。適合放在茶香與北海岸記憶之間。",
  "一葉一心": "從一片茶葉、一份心意說起，唱出茶與待客的溫度。這首歌能承接茶行歲月，也讓品茗桌旁的記憶更完整。",
  "百年土埆厝的茶湯": "把百年土埆厝與一碗茶湯放在一起，唱出老屋、茶香與家族記憶的交會。它有很強的主題代表性。",
  "土埆厝的燈火": "燈火是家還在等人的信號。這首歌適合放在老屋修復後的段落，讓百年土埆厝不只是建築，也成為家族團聚的光。",
  "把汗水釀成歲月芬芳": "把工程、田園與養蜂的辛苦都收進同一個意象：汗水最後會釀成芬芳。它是整組歌曲裡很適合作結尾的生命總結。"
};

const musicTrackTitles = new Set(musicTracks.map((track) => track.title));
const addMusicTrack = (track) => {
  if (musicTrackTitles.has(track.title)) return;
  musicTracks.push({
    artist: "生命故事歌曲",
    cover: "",
    story: "新增到網站音樂資料夾的 MP3。",
    lyrics: `${track.title}\n\n這首歌已加入網站 MP3 音樂播放清單。`,
    ...track
  });
  musicTrackTitles.add(track.title);
};

downloadedMusicTracks.forEach((fileName) => {
  const title = fileName.replace(/\.mp3$/i, "");
  addMusicTrack({
    title,
    src: `assets/music/${fileName}`
  });
});

musicTracks.forEach((track) => {
  if (musicNarratives[track.title]) {
    track.lyrics = musicNarratives[track.title];
  }
});

const sharedMusicTracks = [
  {
    title: "種進心裡的春天",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/種進心裡的春天.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `種進心裡的春天

歌詞小段
把一粒希望種進心裡
等風一吹，春天就慢慢醒來`
  },
  {
    title: "把日子過成風景",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/把日子過成風景.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `把日子過成風景

歌詞小段
把日子過成風景
平凡的路，也有值得回頭看的光`
  },
  {
    title: "讓花歸花，讓草歸草",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/讓花歸花_讓草歸草.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `讓花歸花，讓草歸草

歌詞小段
讓花歸花，讓草歸草
把心裡放不下的事，慢慢交還給風`
  },
  {
    title: "這一站，沒白來",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/這一站，沒白來.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `這一站，沒白來

歌詞小段
這一站，沒白來
走過的路，都在心裡留下答案`
  },
  {
    title: "把歲月種成了花",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/把歲月種成了花.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `把歲月種成了花

歌詞小段
把歲月種成了花
有些等待，終於在風裡開成溫柔`
  },
  {
    title: "窗前那位房客",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/窗前那位房客.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `窗前那位房客

歌詞小段
窗前那位房客，靜靜看著天色
把一段心事，留給夜晚慢慢聽`
  },
  {
    title: "一葉一心",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/一葉一心.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `一葉一心

歌詞小段
一葉一心，慢慢等茶香醒來
一盞清湯，照見人情的溫柔`
  },
  {
    title: "一襟清夢",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/一襟清夢.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `一襟清夢

歌詞小段
把一襟清夢收在晚風裡
走過山路，心還記得回家的方向`
  },
  {
    title: "人生親像蜜香紅茶",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/人生親像蜜香紅茶.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `人生親像蜜香紅茶

歌詞小段
入口有甜，也有慢慢回來的香
一杯茶，一段路，一個人慢慢走出的故事`
  },
  {
    title: "山風捎來的甘甜",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/山風捎來的甘甜.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `山風捎來的甘甜

歌詞小段
山風捎來一點甘甜
像花開過後，蜂箱裡慢慢亮起的金黃`
  },
  {
    title: "美人山下的月桃花 (1)",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/美人山下的月桃花 (1).mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `美人山下的月桃花

歌詞小段
把舊時光輕輕牽回來
風從山邊走過，也把家的聲音帶來`
  },
  {
    title: "播田花開時",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/播田花開時.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `播田花開時

歌詞小段
播田花開時，風也放慢腳步
泥土裡的盼望，一季一季長成日子`
  },
  {
    title: "醉蜂鬧山頭",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/醉蜂鬧山頭.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `醉蜂鬧山頭

歌詞小段
花開的時候
整座山都醒來`
  },
  {
    title: "把善意种进今天",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/把善意种进今天.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `把善意种进今天

歌詞小段
把善意种进今天
讓明天多一點光`
  },
  {
    title: "為一朵花停留",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/為一朵花停留.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `為一朵花停留

歌詞小段
為一朵花停留
也為忙碌的心留一點時間`
  },
  {
    title: "把日子種成花",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/把日子種成花.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `把日子種成花

歌詞小段
把日子種成花
讓平凡也慢慢開出顏色`
  },
  {
    title: "屋簷下的候鳥",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/屋簷下的候鳥.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `屋簷下的候鳥

歌詞小段
屋簷下的候鳥
總會記得回家的方向`
  },
  {
    title: "追著花開的約定",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/追著花開的約定.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `追著花開的約定

歌詞小段
追著花開的約定
一路走到風也變溫柔`
  },
  {
    title: "牆上的慢時鐘",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/牆上的慢時鐘.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `牆上的慢時鐘

歌詞小段
牆上的慢時鐘
替老屋留住慢慢走的光陰`
  },
  {
    title: "幸福就在腳下",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/幸福就在腳下.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `幸福就在腳下

歌詞小段
幸福就在腳下
走穩今天，就走近了明天`
  },
  {
    title: "今天的花",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/今天的花.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `今天的花

歌詞小段
今天的花
開在今天，就已經值得珍惜`
  },
  {
    title: "九重葛盛開的陽台",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/九重葛盛開的陽台.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `九重葛盛開的陽台

歌詞小段
九重葛盛開的陽台
把小小日子照成明亮風景`
  },
  {
    title: "一根冰棒與水煮花生",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/一根冰棒與水煮花生.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `一根冰棒與水煮花生

歌詞小段
一根冰棒與水煮花生
都是記憶裡最樸素的甜`
  },
  {
    title: "溫柔留白",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/溫柔留白.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `溫柔留白

歌詞小段
溫柔留白
讓說不出口的心事也有地方安放`
  },
  {
    title: "留一點溫柔",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/留一點溫柔.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `留一點溫柔

歌詞小段
留一點溫柔
給自己，也給走過的路`
  },
  {
    title: "種下一畝夢",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/種下一畝夢.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `種下一畝夢

歌詞小段
種下一畝夢
等春風來時慢慢發芽`
  },
  {
    title: "美人山下的約定",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/美人山下的約定.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `美人山下的約定

歌詞小段
美人山下的約定
讓回家的路一直亮著`
  },
  {
    title: "山還在，人還在",
    artist: "分享好聽的音樂",
    src: "assets/music/shared/山還在_人還在.mp3",
    story: "分享音樂專區 MP3。",
    lyrics: `山還在，人還在

歌詞小段
山還在，人還在
有些情分就還在`
  }
];

const oldHouseTimeline = [
  { year: "1910", title: "簡家土角厝落成", text: "老屋建於一九一〇年，原本是傳統一條龍格局，見證金山美人山下百年農村歲月。" },
  { year: "增建", title: "家族人口增加，左右護龍陸續形成", text: "隨著家族人口增加，老屋陸續增建左右護龍，只可惜左側廂房後來年久崩壞。" },
  { year: "荒廢", title: "離鄉多年後，看見老屋逐漸沉睡", text: "簡家老二不忍兒時成長的老屋荒廢，決定號召四兄弟共同出錢出力修復。" },
  { year: "四年", title: "簡家兄弟自行修復，讓土角厝恢復生機", text: "歷經四年整修，簡家兄弟出錢出力，土角磚修補、外牆補砌、木窗木桌多由老二與么弟親手完成。" },
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
  { year: "台南四年", title: "古都茶行與景氣反轉", text: "單身匹馬到台南找宿舍、徵員工，最多有五位門市人員，也曾在東帝士百貨一樓規劃的七個店面中承租一間作為第二個分店；後因母親往生、兒子出生與景氣急轉直下，面臨龐大租金與管銷壓力。" },
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

function getInitialSeasonKey() {
  if (page !== "home") return activeSeason;

  try {
    const savedSeason = window.localStorage.getItem(seasonStorageKey);
    if (savedSeason && homeSeasons[savedSeason]) return savedSeason;
  } catch (error) {
    return activeSeason;
  }

  return activeSeason;
}

let currentSeason = getInitialSeasonKey();

function applyHomeSeason(seasonKey = currentSeason) {
  if (page !== "home") return;

  const nextSeasonKey = homeSeasons[seasonKey] ? seasonKey : activeSeason;
  const season = homeSeasons[nextSeasonKey] || homeSeasons.spring;
  currentSeason = nextSeasonKey;
  document.body.dataset.season = season.bodyClass;

  const heroImage = document.querySelector("#seasonHeroImage");
  const eyebrow = document.querySelector("#seasonEyebrow");
  const title = document.querySelector("#seasonTitle");
  const note = document.querySelector("#seasonNote");
  const leadOne = document.querySelector("#seasonLeadOne");
  const leadTwo = document.querySelector("#seasonLeadTwo");

  if (heroImage) {
    heroImage.src = season.image;
    heroImage.alt = season.alt;
  }

  if (eyebrow) eyebrow.textContent = season.eyebrow;
  if (title) title.textContent = season.title;
  if (note) note.textContent = season.note;
  if (leadOne) leadOne.textContent = season.leadOne;
  if (leadTwo) leadTwo.textContent = season.leadTwo;

  document.querySelectorAll("[data-season-button]").forEach((button) => {
    const isActive = button.dataset.seasonButton === currentSeason;
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setupSeasonSwitcher() {
  if (page !== "home") return;

  document.querySelectorAll("[data-season-button]").forEach((button) => {
    button.addEventListener("click", () => {
      const seasonKey = button.dataset.seasonButton;
      if (!homeSeasons[seasonKey]) return;

      applyHomeSeason(seasonKey);

      try {
        window.localStorage.setItem(seasonStorageKey, seasonKey);
      } catch (error) {
        // localStorage may be unavailable in some privacy modes.
      }
    });
  });
}

applyHomeSeason();
setupSeasonSwitcher();

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
    const categoryLabels = {
      beekeeping: "翔勝養蜂相簿",
      engineering: "工程與茶行相簿",
      "flora-expo": "台北花博勤務相簿",
      home: "山海之間相簿",
      childhood: "故鄉與土角厝相簿"
    };

    image.src = item.src;
    image.alt = item.title;
    category.textContent = categoryLabels[item.category] || "生命相簿";
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

function setupDigitalAlbums() {
  const dialog = document.querySelector("#albumDialog");
  if (!dialog) return;
  const albums = {
    country: {
      label: "相簿一・鄉下", title: "鄉下｜屋前屋後的日常", intro: "果園、菜圃與鵝群，收藏鄉間生活裡安靜而珍貴的片刻。",
      photos: [
        ["assets/albums/country/S__299827208.jpg", "果園與遠山"],
        ["assets/albums/country/S__299827212.jpg", "溫室裡的水耕蔬菜"],
        ["assets/albums/country/S__299819026.jpg", "菜園裡的相聚"],
        ["assets/albums/country/S__299819032.jpg", "花草間的鵝群"],
        ["assets/albums/country/S__324362243.jpg", "草地上散步的鵝群"],
        ["assets/albums/country/S__299917314.jpg", "鄉間坡地的日常" ]
      ]
    },
    work: {
      label: "相簿二・工作", title: "工作｜一步一腳印", intro: "從日常辦公、工程紀錄到團隊榮譽，記下認真做事的人，以及歲月累積下來的專業。",
      photos: [
        ["assets/albums/work/P1000419.JPG", "辦公室裡的工作日常"],
        ["assets/albums/work/P1000952.JPG", "忙碌工作中的片刻"],
        ["assets/albums/work/DSC05006.JPG", "整理與審閱工程文件"],
        ["assets/albums/work/img002.jpg", "工程局活動合影"],
        ["assets/albums/work/DSC05913.JPG", "接受績優人員表揚"],
        ["assets/albums/work/DSC05919.JPG", "績優人員頒獎合影・2005"],
        ["assets/albums/work/DSC01722.JPG", "捷運工程成果與團隊榮耀・2006"]
      ]
    },
    honey: {
      label: "相簿三・採蜜", title: "採蜜｜跟著花開出發", intro: "循著花期走進蜂場，從照料蜂群到採收，看見一滴蜂蜜背後完整的旅程。",
      photos: [
        ["assets/albums/honey/DSC05300.jpg", "林間蜂場全景"],
        ["assets/albums/honey/DSC05304.jpg", "檢視蜂群與蜂脾"],
        ["assets/albums/honey/DSC05321.jpg", "從蜂箱中取出蜂脾"],
        ["assets/albums/honey/DSC05326.jpg", "兩片飽滿的蜜脾"],
        ["assets/albums/honey/DSC05361.jpg", "蜂群覆滿蜂脾"],
        ["assets/albums/honey/DSC05369.jpg", "蜂農展示成熟蜜脾"],
        ["assets/albums/honey/DSC05371.jpg", "蜂蜜在巢房中閃著光"],
        ["assets/albums/honey/DSC05380.jpg", "封蓋蜜的細節"],
        ["assets/albums/honey/DSC05389.jpg", "採收現場與搖蜜設備"],
        ["assets/albums/honey/DSC05397.jpg", "夥伴一起整理蜂箱"],
        ["assets/albums/honey/DSC05414.jpg", "林間採蜜作業"],
        ["assets/albums/honey/DSC05417.jpg", "蜂場裡的採收團隊"],
        ["assets/albums/honey/DSC05425.jpg", "蜂箱蓋上的自然蜂巢"],
        ["assets/albums/honey/DSC05430.jpg", "排列如花瓣的天然巢脾"],
        ["assets/albums/honey/DSC05435.jpg", "蜂群與新築的白色巢脾"],
        ["assets/albums/honey/DSC05447.jpg", "自然巢脾近景" ]
      ]
    }
  };
  const label = dialog.querySelector("#albumDialogLabel");
  const title = dialog.querySelector("#albumDialogTitle");
  const intro = dialog.querySelector("#albumDialogIntro");
  const pageView = dialog.querySelector("#albumDialogPage");
  const pageCount = dialog.querySelector("#albumPageCount");
  const prevButton = dialog.querySelector("#albumPrev");
  const nextButton = dialog.querySelector("#albumNext");
  const closeButton = dialog.querySelector(".album-dialog__close");
  let opener = null;
  let currentPage = 0;
  let currentPhotos = [];

  function showPage(index) {
    const totalPages = currentPhotos.length;
    if (!totalPages) {
      pageView.textContent = "照片準備中";
      pageCount.textContent = "";
      return;
    }
    currentPage = (index + totalPages) % totalPages;
    const [src, caption] = currentPhotos[currentPage];
    pageView.innerHTML = `<img src="${src}" alt="${caption}">`;
    pageCount.textContent = `${caption}　${currentPage + 1} / ${totalPages}`;
  }

  function closeAlbum() {
    dialog.classList.remove("open");
    dialog.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    opener?.focus();
  }

  function openAlbum(key, button) {
    const album = albums[key];
    if (!album) return;
    opener = button;
    label.textContent = album.label;
    title.textContent = album.title;
    intro.textContent = album.intro;
    currentPhotos = album.photos || [];
    showPage(0);
    dialog.classList.add("open");
    dialog.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    closeButton.focus();
  }

  document.querySelectorAll(".album-card[data-album]").forEach((card) => {
    const button = card.querySelector(".album-cover");
    button?.addEventListener("click", () => openAlbum(card.dataset.album, button));
  });
  prevButton.addEventListener("click", () => showPage(currentPage - 1));
  nextButton.addEventListener("click", () => showPage(currentPage + 1));
  dialog.addEventListener("click", (event) => { if (event.target.closest("[data-close-album]")) closeAlbum(); });
  document.addEventListener("keydown", (event) => {
    if (!dialog.classList.contains("open")) return;
    if (event.key === "Escape") closeAlbum();
    if (event.key === "ArrowLeft") showPage(currentPage - 1);
    if (event.key === "ArrowRight") showPage(currentPage + 1);
  });
}

function renderArticles(targetId, filter = "all", limit = articleItems.length) {
  const target = document.querySelector(`#${targetId}`);
  if (!target) return;

  const items = articleItems
    .filter((item) => filter === "all" || item.category === filter)
    .slice(0, limit);

  target.innerHTML = items.map((item) => {
    const isExternal = /^https?:\/\//.test(item.link);
    const linkAttrs = isExternal ? ' target="_blank" rel="noopener"' : "";

    return `
    <article class="article-card">
      <time datetime="${item.date}">${item.date}</time>
      <p class="tag">${item.tag}</p>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <a href="${item.link}"${linkAttrs}>繼續閱讀</a>
    </article>
  `;
  }).join("");
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
  const repeatToggle = document.querySelector("#repeatToggle");
  const nextTrack = document.querySelector("#nextTrack");
  const autoPlayAll = document.querySelector("#autoPlayAll");

  if (!playlist || !audio || !trackTitle || !trackMeta || !lyricsTitle || !lyricsText) return;

  const buttonsByTrack = new Map();
  let selectedTrack = null;
  let selectedButton = null;
  let loadCheckId = 0;
  let shouldAutoPlaySelectedTrack = false;
  let shouldAutoPlayAll = false;

  const isGoogleDriveSource = (src = "") => /drive\.google\.com|drive\.usercontent\.google\.com/i.test(src);
  const isLocalAudioSource = (src = "") => Boolean(src) && !/^https?:\/\//i.test(src);
  const getMetaText = (track, extra = "") => [track.artist, track.story, extra].filter(Boolean).join("｜");
  const sourceTracks = page === "shared-music" ? sharedMusicTracks : musicTracks;
  const playlistTracks = sourceTracks.filter((track) => isLocalAudioSource(track.src));

  function getNextTrack(track) {
    if (!playlistTracks.length) return null;
    const currentIndex = playlistTracks.indexOf(track);
    const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % playlistTracks.length : 0;
    const next = playlistTracks[nextIndex];
    return {
      track: next,
      button: buttonsByTrack.get(next)
    };
  }

  function findNextLocalTrack(track) {
    const startIndex = Math.max(0, playlistTracks.indexOf(track));

    for (let offset = 1; offset <= playlistTracks.length; offset += 1) {
      const candidate = playlistTracks[(startIndex + offset) % playlistTracks.length];
      if (isLocalAudioSource(candidate.src)) {
        return {
          track: candidate,
          button: buttonsByTrack.get(candidate)
        };
      }
    }

    return null;
  }

  function showLoadProblem(track, message, shouldFallback = false) {
    if (shouldFallback) {
      const fallback = findNextLocalTrack(track);

      if (fallback?.button) {
        trackMeta.textContent = getMetaText(track, `${message}已自動切換到下一首可播放 MP3。`);
        selectTrack(fallback.track, fallback.button, true, true);
        return;
      }
    }

    trackMeta.textContent = getMetaText(track, message);
  }

  function setRepeatMode(isEnabled) {
    audio.loop = isEnabled;
    repeatToggle?.classList.toggle("active", isEnabled);
    repeatToggle?.setAttribute("aria-pressed", String(isEnabled));
    if (repeatToggle) {
      repeatToggle.textContent = isEnabled ? "重複播放中" : "重複播放";
    }
  }

  function setAutoPlayAllMode(isEnabled) {
    shouldAutoPlayAll = isEnabled;
    autoPlayAll?.classList.toggle("active", isEnabled);
    autoPlayAll?.setAttribute("aria-pressed", String(isEnabled));
    if (autoPlayAll) {
      autoPlayAll.textContent = isEnabled ? "自動播放全部歌中" : "自動播放全部歌";
    }
  }

  function selectTrack(track, button, shouldPlay = false, skipFallback = false) {
    loadCheckId += 1;
    selectedTrack = track;
    selectedButton = button;
    shouldAutoPlaySelectedTrack = shouldPlay;

    document.querySelectorAll(".track-button").forEach((node) => node.classList.remove("active"));
    button.classList.add("active");
    trackTitle.textContent = track.title;
    trackMeta.textContent = getMetaText(track);
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

    if (track.src && isGoogleDriveSource(track.src)) {
      const currentLoadCheckId = loadCheckId;

      window.setTimeout(() => {
        if (currentLoadCheckId !== loadCheckId || selectedTrack !== track) return;
        if (audio.readyState > 0) return;

        showLoadProblem(
          track,
          "Google Drive 音檔目前無法直接載入，請確認檔案分享權限已設為「知道連結的任何人可查看」。",
          shouldPlay && !skipFallback
        );
      }, 7000);
    }

    if (shouldPlay && track.src) {
      audio.play().catch(() => {
        trackMeta.textContent = getMetaText(track, "若瀏覽器阻擋自動播放，請再按播放器的播放鍵。");
      });
    }
  }

  audio.addEventListener("error", () => {
    if (!selectedTrack) return;

    showLoadProblem(
      selectedTrack,
      "音檔載入失敗，請確認 MP3 檔案存在並可公開讀取。",
      shouldAutoPlaySelectedTrack && isGoogleDriveSource(selectedTrack.src)
    );
  });

  repeatToggle?.addEventListener("click", () => {
    const nextRepeatState = !audio.loop;
    setRepeatMode(nextRepeatState);
    if (nextRepeatState) {
      setAutoPlayAllMode(false);
    }
  });

  nextTrack?.addEventListener("click", () => {
    const next = getNextTrack(selectedTrack);
    if (!next?.button) return;
    selectTrack(next.track, next.button, true);
  });

  autoPlayAll?.addEventListener("click", () => {
    const nextAutoPlayState = !shouldAutoPlayAll;
    setAutoPlayAllMode(nextAutoPlayState);
    if (nextAutoPlayState) {
      setRepeatMode(false);
    }
  });

  audio.addEventListener("ended", () => {
    if (!shouldAutoPlayAll || audio.loop) return;
    const next = getNextTrack(selectedTrack);
    if (!next?.button) return;
    selectTrack(next.track, next.button, true);
  });

  playlist.innerHTML = "";

  playlistTracks.forEach((track, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "track-button";
    button.innerHTML = `<strong>${track.title}</strong><span>${track.artist}</span>`;
    button.addEventListener("click", () => selectTrack(track, button, true));
    playlist.appendChild(button);
    buttonsByTrack.set(track, button);
  });

  const firstPlayableTrack = playlistTracks[0];

  if (firstPlayableTrack) {
    selectTrack(firstPlayableTrack, buttonsByTrack.get(firstPlayableTrack), false);
  }
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

renderGallery("homeGallery", "all", 6);
renderGallery("childhoodGallery", "childhood");
renderGallery("engineeringGallery", "engineering");
renderGallery("beekeepingGallery", "beekeeping");
renderGallery("floraExpoGallery", "flora-expo", 12);
setupGalleryLightbox();
setupDigitalAlbums();
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

if (page === "music" || page === "shared-music") {
  setupMusic();
}
