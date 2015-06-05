/**
 * Created by xx on 15/6/4.
 */



(function (module) {

    module.results = [
        {id: 1, name: "文艺", description: "", score: 109},
        {id: 2, name: "二", description: "", score: 110},
        {id: 3, name: "高逼格", description: "", score: 106},
        {id: 4, name: "无节操", description: "", score: 109},
        {id: 5, name: "腐", description: "", score: 109},
        {id: 6, name: "宅", description: "", score: 101},
        {id: 7, name: "萌", description: "", score: 103},
        {id: 8, name: "高智商", description: "", score: 101},
    ];


    module.apps = [
        {id: 1, name: "豆瓣FM", imageUrl: "", category: [{id: 1, score: 8}]},
        {id: 2, name: "ONE", imageUrl: "", category: [{id: 1, score: 9}]},
        {id: 3, name: "特逗", imageUrl: "", category: [{id: 2, score: 9}]},
        {id: 4, name: "美图gif", imageUrl: "", category: [{id: 2, score: 6}]},
        {id: 5, name: "MONO", imageUrl: "", category: [{id: 3, score: 9}]},
        {id: 6, name: "LOFTER", imageUrl: "", category: [{id: 3, score: 7}]},
        {id: 7, name: "糗事百科", imageUrl: "", category: [{id: 4, score: 8}]},
        {id: 8, name: "节操精选", imageUrl: "", category: [{id: 4, score: 7}]},
        {id: 9, name: "陌陌", imageUrl: "", category: [{id: 5, score: 6}]},
        {id: 10, name: "饿了么", imageUrl: "", category: [{id: 5, score: 8}]},
        {id: 11, name: "豆腐", imageUrl: "", category: [{id: 6, score: 10}]},
        {id: 12, name: "有妖气", imageUrl: "", category: [{id: 6, score: 8}]},
        {id: 13, name: "美图贴贴", imageUrl: "", category: [{id: 7, score: 8}]},
        {id: 14, name: "颜文字", imageUrl: "", category: [{id: 7, score: 8}]},
        {id: 15, name: "Framed", imageUrl: "", category: [{id: 8, score: 8}]},
        {id: 16, name: "The room", imageUrl: "", category: [{id: 8, score: 9}]},
        {id: 17, name: "INS", imageUrl: "", category: [{id: 1, score: 2}, {id: 3, score: 3}]},
        {id: 18, name: "美拍", imageUrl: "", category: [{id: 7, score: 2}, {id: 2, score: 2}]},
        {id: 19, name: "百思不得其姐", imageUrl: "", category: [{id: 5, score: 2}, {id: 4, score: 4}]},
        {id: 20, name: "开心消消乐", imageUrl: "", category: [{id: 8, score: 2}, {id: 6, score: 4}]},
    ];


    module.movies = [
        {id: 1, name: "重庆森林", imageUrl: "", category: [{id: 1, score: 10}]},
        {id: 2, name: "海上钢琴师", imageUrl: "", category: [{id: 1, score: 7}]},
        {id: 3, name: "万万没想到", imageUrl: "", category: [{id: 2, score: 8}]},
        {id: 4, name: "屌丝男士", imageUrl: "", category: [{id: 2, score: 7}]},
        {id: 5, name: "星际穿越", imageUrl: "", category: [{id: 3, score: 7}]},
        {id: 6, name: "辛德勒名单", imageUrl: "", category: [{id: 3, score: 8}]},
        {id: 7, name: "不一样的美男", imageUrl: "", category: [{id: 4, score: 8}]},
        {id: 8, name: "独裁者", imageUrl: "", category: [{id: 4, score: 8}]},
        {id: 9, name: "K-ON!轻音部", imageUrl: "", category: [{id: 5, score: 8}]},
        {id: 10, name: "银魂", imageUrl: "", category: [{id: 5, score: 9}]},
        {id: 11, name: "暹罗之恋", imageUrl: "", category: [{id: 6, score: 7}]},
        {id: 12, name: "黑执事", imageUrl: "", category: [{id: 6, score: 7}]},
        {id: 13, name: "樱桃小丸子", imageUrl: "", category: [{id: 7, score: 9}]},
        {id: 14, name: "马达加斯加的企鹅", imageUrl: "", category: [{id: 7, score: 7}]},
        {id: 15, name: "记忆碎片", imageUrl: "", category: [{id: 8, score: 9}]},
        {id: 16, name: "蝴蝶效应", imageUrl: "", category: [{id: 8, score: 10}]},
        {id: 17, name: "古剑奇谭", imageUrl: "", category: [{id: 6, score: 4}, {id: 5, score: 6}]},
        {id: 18, name: "唐伯虎点秋香", imageUrl: "", category: [{id: 2, score: 6}, {id: 4, score: 4}]},
        {id: 19, name: "Sherlock", imageUrl: "", category: [{id: 3, score: 6}, {id: 8, score: 4}]},
        {id: 20, name: "千与千寻", imageUrl: "", category: [{id: 7, score:6}, {id: 1, score: 4}]},
    ];

    module.stars = [
        {id: 1, name: "苏打绿", imageUrl: "", category: [{id: 1, score: 8}]},
        {id: 2, name: "陈绮贞", imageUrl: "", category: [{id: 1, score: 9}]},
        {id: 3, name: "张全蛋", imageUrl: "", category: [{id: 2, score: 10}]},
        {id: 4, name: "王大锤", imageUrl: "", category: [{id: 2, score: 10}]},
        {id: 5, name: "埃隆·马斯克", imageUrl: "", category: [{id: 3, score: 9}]},
        {id: 6, name: "布莱恩科兰斯顿", imageUrl: "", category: [{id: 3, score: 7}]},
        {id: 7, name: "王尼玛", imageUrl: "", category: [{id: 4, score: 9}]},
        {id: 8, name: "坂田银时", imageUrl: "", category: [{id: 4, score: 7}]},
        {id: 9, name: "路飞", imageUrl: "", category: [{id: 5, score: 7}]},
        {id: 10, name: "AngelaBaby", imageUrl: "", category: [{id: 5, score: 6}]},
        {id: 11, name: "小野寺律", imageUrl: "", category: [{id: 6, score: 9}]},
        {id: 12, name: "樱兰", imageUrl: "", category: [{id: 6, score: 9}]},
        {id: 13, name: "大白", imageUrl: "", category: [{id: 7, score: 7}]},
        {id: 14, name: "阿拉蕾", imageUrl: "", category: [{id: 7, score: 9}]},
        {id: 15, name: "阿尔伯特•爱因斯坦", imageUrl: "", category: [{id: 8, score: 9}]},
        {id: 16, name: "克里斯托弗•诺兰", imageUrl: "", category: [{id: 8, score: 7}]},
        {id: 17, name: "李易峰", imageUrl: "", category: [{id: 7, score: 5}, {id: 5, score: 5}]},
        {id: 18, name: "jobs", imageUrl: "", category: [{id: 3, score: 5}, {id: 8, score: 5}]},
        {id: 19, name: "周星驰", imageUrl: "", category: [{id: 2, score: 5}, {id: 4, score: 4}]},
        {id: 20, name: "韩寒", imageUrl: "", category: [{id: 1, score:6}, {id: 6, score: 4}]},
    ];







}(exports));