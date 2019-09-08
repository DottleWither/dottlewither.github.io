var hitokoto = [
    {
        "content": "穿女装可以减少出Bug概率",
        "author": "Lemir3"
    },
    {
        "content": "老爷爷无药可救",
        "author": "龚诗锋"
    },
    {
        "content": "很怪。",
        "author": "DJ Roysten"
    },
    {
        "content": "我发誓，我必将AK IOI！",
        "author": "YYY"
    },
    {
        "content": "哇，终于能吊打ZXY了呢！",
        "author": "伝説の中YYQ"
    },
    {
        "content": "难得觉得自己不太蒻。",
        "author": "Old_Wang"
    },
    {
        "content": "作为我校可能最强的人，这真是No Face啊",
        "author": "Old_Wang"
    },
    {
        "content": "你的思想被我们推翻了",
        "author": "Old_Wang"
    },
    {
        "content": "你今中午吃几颗米，我下午就A几道题",
        "author": "Old_Wang"
    },
    {
        "content": "我不装弱，我就是个巨佬。你要装弱，你就是个菜鸡。",
        "author": "Old_Wang"
    },
    {
        "content": "我无敌了！",
        "author": "Old_Wang"
    },
    {
        "content": "我Luogu Rk80了",
        "author": "Social_Zhao"
    },
    {
        "content": "dottle 弱爆了",
        "author": "Krigos"
    }
];

function LoadHitokoto() {
    let bar = document.getElementById('hitokoto');
    //bar.setAttribute('style', 'color: rgba(0, 0, 0, 0); transition: 0.3s;');
    bar.innerHTML = '';
    let header = document.createElement('div');
    bar.appendChild(header);
    header.setAttribute('class', 'mdui-typo-title-opacity mdui-text-color-theme-accent');
    let content = document.createElement('div');
    bar.appendChild(content);
    content.setAttribute('class', 'mdui-card-content mdui-typo-body-1 mdui-center');
    content.setAttribute('style', 'text-align: center;color:#666666;font-size:150%;');
    let i = Math.floor(Math.random() * 19260817) % hitokoto.length;
    content.innerHTML = '「' + hitokoto[i].content + '」<br>——' + hitokoto[i].author;
    //bar.setAttribute('style', 'color: inherit; transition: 0.3s;');
}