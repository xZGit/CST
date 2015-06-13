/**
 * Created by xx on 15/6/4.
 */



(function (module) {

    module.results = {
        1: {name: "文艺", title: "上帝说，要有文艺范，于是就有了你", description: "", score: 109},
        2: {name: "二", title: "来，先抽根辣条压压惊", description: "", score: 110},
        3: {name: "高逼格", title: "一入糗百深似海，从此节操是路人/节操！你有种别走", description: "", score: 106},
        4: {name: "无节操", title: "我放佛又听到你们在背后说我帅/ 你就是一口井 横竖都是二", description: "", score: 109},
        5: {name: "腐", title: "鸳鸳相抱何时了，鸯在一旁看热闹", description: "", score: 109},
        6: {name: "宅", title: "我明明记得上次出门还是冬天啊！", description: "", score: 101},
        7: {name: "萌/喵~", title: "你们不能因为我超可爱就欺负我丫", description: "", score: 103},
        8: {name: "烧脑", title: "智商24小时在线,连不连得上就看设备（naozi）带了没 真相只有一个", description: "", score: 101},
        13: {name: "高逼格文艺范", title: "上帝说，要有逼格高的文艺范，于是就有了你", description: ""},
        14: {name: "无节操文艺骚", title: "问君能有几多愁，恰似路过打酱油", description: ""},
        12: {name: "文艺青年不二逼", title: "问君能有几多愁，恰似一壶二锅头", description: ""},
        16: {name: "文艺宅", title: "没有医险和寿险，我还是不要出门了", description: ""},
        15: {name: "文艺腐", title: "鸳鸳相抱何时了，鸯在一旁看热闹", description: ""},
        17: {name: "文艺猫", title: "卖萌嘟嘴剪刀手，忧郁深沉无所谓", description: ""},
        18: {name: "爱烧脑的文艺青年", title: "人生赢家说的就是你！", description: ""},
        7: {name: "高逼格的宅人", title: "不鸣则已，一鸣惊人", description: ""},
        7: {name: "高逼格腐女", title: "外表冷艳高贵攻，内心二逼吐槽受", description: ""},
        7: {name: "高逼格萌", title: "原谅我这一生不羁装逼爱卖萌", description: ""},
        7: {name: "高逼格烧脑", title: "最强大脑，just do it now", description: ""},
        7: {name: "无节操二逼", title: "掉与不掉，节操就在那里，不增不减（相见时难别亦难，肥皂一掉菊花残", description: ""},
        7: {name: "萌/喵~", title: "你们不能因为我超可爱就欺负我丫", description: ""},
        7: {name: "萌/喵~", title: "你们不能因为我超可爱就欺负我丫", description: ""},
        7: {name: "萌/喵~", title: "你们不能因为我超可爱就欺负我丫", description: ""},
        7: {name: "萌/喵~", title: "你们不能因为我超可爱就欺负我丫", description: ""},
        7: {name: "萌/喵~", title: "你们不能因为我超可爱就欺负我丫", description: ""},
        7: {name: "萌/喵~", title: "你们不能因为我超可爱就欺负我丫", description: ""},


    };

    module.category = {};

    module.category.apps = [
        {id: 1, name: "豆瓣FM", imageUrl: "", results: [{id: 1, score: 8}]},
        {id: 2, name: "ONE", imageUrl: "", results: [{id: 1, score: 9}]},
        {id: 3, name: "特逗", imageUrl: "", results: [{id: 2, score: 9}]},
        {id: 4, name: "美图gif", imageUrl: "", results: [{id: 2, score: 6}]},
        {id: 5, name: "MONO", imageUrl: "", results: [{id: 3, score: 9}]},
        {id: 6, name: "LOFTER", imageUrl: "", results: [{id: 3, score: 7}]},
        {id: 7, name: "糗事百科", imageUrl: "", results: [{id: 4, score: 8}]},
        {id: 8, name: "节操精选", imageUrl: "", results: [{id: 4, score: 7}]},
        {id: 9, name: "陌陌", imageUrl: "", results: [{id: 5, score: 6}]},
        {id: 10, name: "饿了么", imageUrl: "", results: [{id: 5, score: 8}]},
        {id: 11, name: "豆腐", imageUrl: "", results: [{id: 6, score: 10}]},
        {id: 12, name: "有妖气", imageUrl: "", results: [{id: 6, score: 8}]},
        {id: 13, name: "美图贴贴", imageUrl: "", results: [{id: 7, score: 8}]},
        {id: 14, name: "颜文字", imageUrl: "", results: [{id: 7, score: 8}]},
        {id: 15, name: "Framed", imageUrl: "", results: [{id: 8, score: 8}]},
        {id: 16, name: "The room", imageUrl: "", results: [{id: 8, score: 9}]},
        {id: 17, name: "INS", imageUrl: "", results: [{id: 1, score: 2}, {id: 3, score: 3}]},
        {id: 18, name: "美拍", imageUrl: "", results: [{id: 7, score: 2}, {id: 2, score: 2}]},
        {id: 19, name: "百思不得其姐", imageUrl: "", results: [{id: 5, score: 2}, {id: 4, score: 4}]},
        {id: 20, name: "开心消消乐", imageUrl: "", results: [{id: 8, score: 2}, {id: 6, score: 4}]},
    ];

    module.category.movies = [
        {id: 1, name: "重庆森林", imageUrl: "", results: [{id: 1, score: 10}]},
        {id: 2, name: "海上钢琴师", imageUrl: "", results: [{id: 1, score: 7}]},
        {id: 3, name: "万万没想到", imageUrl: "", results: [{id: 2, score: 8}]},
        {id: 4, name: "屌丝男士", imageUrl: "", results: [{id: 2, score: 7}]},
        {id: 5, name: "星际穿越", imageUrl: "", results: [{id: 3, score: 7}]},
        {id: 6, name: "辛德勒名单", imageUrl: "", results: [{id: 3, score: 8}]},
        {id: 7, name: "不一样的美男", imageUrl: "", results: [{id: 4, score: 8}]},
        {id: 8, name: "独裁者", imageUrl: "", results: [{id: 4, score: 8}]},
        {id: 9, name: "K-ON!轻音部", imageUrl: "", results: [{id: 5, score: 8}]},
        {id: 10, name: "银魂", imageUrl: "", results: [{id: 5, score: 9}]},
        {id: 11, name: "暹罗之恋", imageUrl: "", results: [{id: 6, score: 7}]},
        {id: 12, name: "黑执事", imageUrl: "", results: [{id: 6, score: 7}]},
        {id: 13, name: "樱桃小丸子", imageUrl: "", results: [{id: 7, score: 9}]},
        {id: 14, name: "马达加斯加的企鹅", imageUrl: "", results: [{id: 7, score: 7}]},
        {id: 15, name: "记忆碎片", imageUrl: "", results: [{id: 8, score: 9}]},
        {id: 16, name: "蝴蝶效应", imageUrl: "", results: [{id: 8, score: 10}]},
        {id: 17, name: "古剑奇谭", imageUrl: "", results: [{id: 6, score: 4}, {id: 5, score: 6}]},
        {id: 18, name: "唐伯虎点秋香", imageUrl: "", results: [{id: 2, score: 6}, {id: 4, score: 4}]},
        {id: 19, name: "Sherlock", imageUrl: "", results: [{id: 3, score: 6}, {id: 8, score: 4}]},
        {id: 20, name: "千与千寻", imageUrl: "", category: [{id: 7, score: 6}, {id: 1, score: 4}]},
    ];

    module.category.stars = [
        {id: 1, name: "苏打绿", imageUrl: "", results: [{id: 1, score: 8}]},
        {id: 2, name: "陈绮贞", imageUrl: "", results: [{id: 1, score: 9}]},
        {id: 3, name: "张全蛋", imageUrl: "", results: [{id: 2, score: 10}]},
        {id: 4, name: "王大锤", imageUrl: "", results: [{id: 2, score: 10}]},
        {id: 5, name: "埃隆·马斯克", imageUrl: "", results: [{id: 3, score: 9}]},
        {id: 6, name: "布莱恩科兰斯顿", imageUrl: "", results: [{id: 3, score: 7}]},
        {id: 7, name: "王尼玛", imageUrl: "", results: [{id: 4, score: 9}]},
        {id: 8, name: "坂田银时", imageUrl: "", results: [{id: 4, score: 7}]},
        {id: 9, name: "路飞", imageUrl: "", results: [{id: 5, score: 7}]},
        {id: 10, name: "AngelaBaby", imageUrl: "", results: [{id: 5, score: 6}]},
        {id: 11, name: "小野寺律", imageUrl: "", results: [{id: 6, score: 9}]},
        {id: 12, name: "樱兰", imageUrl: "", results: [{id: 6, score: 9}]},
        {id: 13, name: "大白", imageUrl: "", results: [{id: 7, score: 7}]},
        {id: 14, name: "阿拉蕾", imageUrl: "", results: [{id: 7, score: 9}]},
        {id: 15, name: "阿尔伯特•爱因斯坦", imageUrl: "", results: [{id: 8, score: 9}]},
        {id: 16, name: "克里斯托弗•诺兰", imageUrl: "", results: [{id: 8, score: 7}]},
        {id: 17, name: "李易峰", imageUrl: "", results: [{id: 7, score: 5}, {id: 5, score: 5}]},
        {id: 18, name: "jobs", imageUrl: "", results: [{id: 3, score: 5}, {id: 8, score: 5}]},
        {id: 19, name: "周星驰", imageUrl: "", results: [{id: 2, score: 5}, {id: 4, score: 4}]},
        {id: 20, name: "韩寒", imageUrl: "", results: [{id: 1, score: 6}, {id: 6, score: 4}]},
    ];

    module.category.books = [
        {id: 1, name: "撒哈拉的故事", imageUrl: "", results: [{id: 1, score: 9}]},
        {id: 2, name: "挪威的森林", imageUrl: "", results: [{id: 1, score: 8}]},
        {id: 3, name: "如何成为一个妖孽", imageUrl: "", results: [{id: 2, score: 8}]},
        {id: 4, name: "沙僧日记", imageUrl: "", results: [{id: 2, score: 7}]},
        {id: 5, name: "平凡的世界", imageUrl: "", results: [{id: 3, score: 8}]},
        {id: 6, name: "国富论", imageUrl: "", results: [{id: 3, score: 9}]},
        {id: 7, name: "暴走漫画", imageUrl: "", results: [{id: 4, score: 7}]},
        {id: 8, name: "十万个冷笑话", imageUrl: "", results: [{id: 4, score: 8}]},
        {id: 9, name: "鬼吹灯", imageUrl: "", results: [{id: 5, score: 8}]},
        {id: 10, name: "完美世界", imageUrl: "", results: [{id: 5, score: 9}]},
        {id: 11, name: "探索者系列", imageUrl: "", results: [{id: 6, score: 9}]},
        {id: 12, name: "怎见浮生不若梦", imageUrl: "", results: [{id: 6, score: 10}]},
        {id: 13, name: "一起一起这里那里", imageUrl: "", results: [{id: 7, score: 6}]},
        {id: 14, name: "守护甜心", imageUrl: "", results: [{id: 7, score: 7}]},
        {id: 15, name: "无人生还", imageUrl: "", results: [{id: 8, score: 8}]},
        {id: 16, name: "福尔摩斯全集", imageUrl: "", results: [{id: 8, score: 8}]},
        {id: 17, name: "小王子", imageUrl: "", results: [{id: 1, score: 5}, {id: 7, score: 5}]},
        {id: 18, name: "达芬奇密码", imageUrl: "", results: [{id: 3, score: 5}, {id: 8, score: 5}]},
        {id: 19, name: "蜡笔小新", imageUrl: "", results: [{id: 2, score: 5}, {id: 4, score: 5}]},
        {id: 20, name: "盗墓笔记", imageUrl: "", results: [{id: 5, score: 5}, {id: 6, score: 5}]},
    ];

    module.category.musics = [
        {id: 1, name: "旅行的意义", imageUrl: "", results: [{id: 1, score: 8}]},
        {id: 2, name: "夜空中最亮的心", imageUrl: "", results: [{id: 1, score: 8}]},
        {id: 3, name: "我的滑板鞋", imageUrl: "", results: [{id: 2, score: 9}]},
        {id: 4, name: "小鸡哔哔", imageUrl: "", results: [{id: 2, score: 8}]},
        {id: 5, name: "I left my heart in San Francisco", imageUrl: "", results: [{id: 3, score: 9}]},
        {id: 6, name: "fly me to the moon", imageUrl: "", results: [{id: 3, score: 7}]},
        {id: 7, name: "小苹果", imageUrl: "", results: [{id: 4, score: 9}]},
        {id: 8, name: "互撸娃", imageUrl: "", results: [{id: 4, score: 7}]},
        {id: 9, name: "初音未来的消失", imageUrl: "", results: [{id: 5, score: 10}]},
        {id: 10, name: "红莲の弓矢", imageUrl: "", results: [{id: 5, score: 8}]},
        {id: 11, name: "腐女进行曲", imageUrl: "", results: [{id: 6, score: 9}]},
        {id: 12, name: "醉仙歌", imageUrl: "", results: [{id: 6, score: 8}]},
        {id: 13, name: "123木头人", imageUrl: "", results: [{id: 7, score: 8}]},
        {id: 14, name: "可爱颂", imageUrl: "", results: [{id: 7, score: 8}]},
        {id: 15, name: "River Flows In You", imageUrl: "", results: [{id: 8, score: 6}]},
        {id: 16, name: "casimir pulaski day", imageUrl: "", results: [{id: 8, score: 8}]},
        {id: 17, name: "Knockin' On Heaven's Door", imageUrl: "", results: [{id: 3, score: 5}, {id: 5, score: 5}]},
        {id: 18, name: "时光机", imageUrl: "", results: [{id: 1, score: 7}, {id: 7, score: 3}]},
        {id: 19, name: "甩葱歌", imageUrl: "", results: [{id: 4, score: 5}, {id: 2, score: 5}]},
        {id: 20, name: "BIRD", imageUrl: "", results: [{id: 5, score: 5}, {id: 6, score: 5}]},
    ];


}(exports));