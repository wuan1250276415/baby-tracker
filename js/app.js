// 宝宝发育数据（40周完整数据）
const weeksData = [
    { week: 1, size: "小种子", sizeEmoji: "🌱", length: "0.1mm", babyActivity: "我正在努力分裂细胞，准备着床呢！", momTips: "可能还不知道怀孕了，保持好心情" },
    { week: 2, size: "小种子", sizeEmoji: "🌱", length: "0.2mm", babyActivity: "我找到了温暖的小窝，安家啦！", momTips: "身体可能还没有明显变化" },
    { week: 3, size: "罂粟籽", sizeEmoji: "⚫", length: "0.5mm", babyActivity: "我在建造自己的小身体，三层结构哦！", momTips: "可能会感到轻微疲劳" },
    { week: 4, size: "芝麻粒", sizeEmoji: "🫘", length: "1mm", babyActivity: "我的小心脏开始跳动啦，砰砰砰！", momTips: "可能出现早孕反应" },
    { week: 5, size: "苹果籽", sizeEmoji: "🍎", length: "2mm", babyActivity: "我的心脏跳得更有力了，大脑也在长大！", momTips: "可能开始孕吐，多休息" },
    { week: 6, size: "石榴籽", sizeEmoji: "❤️", length: "5mm", babyActivity: "我在长眼睛和耳朵，以后要看妈妈听妈妈说话！", momTips: "孕吐可能加重，少食多餐" },
    { week: 7, size: "蓝莓", sizeEmoji: "🫐", length: "1cm", babyActivity: "我的小手小脚在长出来啦，像小蹼一样！", momTips: "可能感到胸部胀痛" },
    { week: 8, size: "树莓", sizeEmoji: "🍇", length: "1.6cm", babyActivity: "我的手指分开了，可以数到10啦！尾巴也没了～", momTips: "子宫开始增大，可能尿频" },
    { week: 9, size: "樱桃", sizeEmoji: "🍒", length: "2.3cm", babyActivity: "我的器官都长好了，现在要努力长大！", momTips: "孕吐可能达到高峰，再坚持一下" },
    { week: 10, size: "草莓", sizeEmoji: "🍓", length: "3cm", babyActivity: "我在练习吞咽羊水，为以后喝奶做准备！", momTips: "孕吐可能开始减轻" },
    { week: 11, size: "无花果", sizeEmoji: "🫒", length: "4cm", babyActivity: "我的头好大呀，在长小指甲呢！", momTips: "孕吐逐渐减轻，食欲恢复" },
    { week: 12, size: "青柠", sizeEmoji: "🍋", length: "5cm", babyActivity: "嗝～我学会打嗝了，好好玩！", momTips: "进入孕中期，最舒适的阶段开始" },
    { week: 13, size: "豌豆荚", sizeEmoji: "🥒", length: "7cm", babyActivity: "我有自己独一无二的指纹啦！", momTips: "可以开始准备孕妇装了" },
    { week: 14, size: "柠檬", sizeEmoji: "🍋", length: "9cm", babyActivity: "我身上长出软软的毛毛，暖暖的！", momTips: "精力恢复，可以适当运动" },
    { week: 15, size: "苹果", sizeEmoji: "🍎", length: "10cm", babyActivity: "我能感觉到亮亮的光了！", momTips: "可能感到轻微胎动" },
    { week: 16, size: "牛油果", sizeEmoji: "🥑", length: "12cm", babyActivity: "我的眼睛会转啦，腿也变长了！", momTips: "可以做唐筛检查了" },
    { week: 17, size: "石榴", sizeEmoji: "🍎", length: "13cm", babyActivity: "我能听到妈妈的心跳和说话声啦！", momTips: "多和宝宝说话吧" },
    { week: 18, size: "红薯", sizeEmoji: "🍠", length: "14cm", babyActivity: "外面好热闹呀，我都能听到！", momTips: "可以开始胎教音乐了" },
    { week: 19, size: "芒果", sizeEmoji: "🥭", length: "15cm", babyActivity: "我穿上了一层保护衣，滑滑的！", momTips: "可能感到明显胎动了" },
    { week: 20, size: "香蕉", sizeEmoji: "🍌", length: "16cm", babyActivity: "妈妈吃的东西我能尝到味道哦！", momTips: "恭喜！孕期过半啦" },
    { week: 21, size: "胡萝卜", sizeEmoji: "🥕", length: "27cm", babyActivity: "我有眉毛啦，表情更丰富了！", momTips: "胎动越来越明显" },
    { week: 22, size: "木瓜", sizeEmoji: "🍈", length: "28cm", babyActivity: "我的小嘴唇成形了，好想亲亲妈妈！", momTips: "注意补钙" },
    { week: 23, size: "葡萄柚", sizeEmoji: "🍊", length: "29cm", babyActivity: "我的皮肤在变厚，不再透明啦！", momTips: "可能出现假性宫缩" },
    { week: 24, size: "玉米", sizeEmoji: "🌽", length: "30cm", babyActivity: "我在练习呼吸，为出生做准备！", momTips: "做糖耐检查" },
    { week: 25, size: "芜菁", sizeEmoji: "🥬", length: "35cm", babyActivity: "我在长头发啦，不知道是什么颜色！", momTips: "注意控制体重增长" },
    { week: 26, size: "葱", sizeEmoji: "🥬", length: "36cm", babyActivity: "我睁开眼睛啦，虽然还看不太清！", momTips: "可能感到腰酸背痛" },
    { week: 27, size: "花菜", sizeEmoji: "🥦", length: "37cm", babyActivity: "我有自己的作息时间了，会睡觉会醒来！", momTips: "进入孕晚期" },
    { week: 28, size: "茄子", sizeEmoji: "🍆", length: "38cm", babyActivity: "我会做梦啦，梦到妈妈的声音！", momTips: "开始数胎动" },
    { week: 29, size: "南瓜", sizeEmoji: "🎃", length: "39cm", babyActivity: "我的肌肉越来越有力气了！", momTips: "可能出现水肿" },
    { week: 30, size: "卷心菜", sizeEmoji: "🥬", length: "40cm", babyActivity: "我的大脑在变聪明，皱皱的！", momTips: "注意休息，避免久站" },
    { week: 31, size: "椰子", sizeEmoji: "🥥", length: "41cm", babyActivity: "我能看、听、闻、尝、摸，全都会了！", momTips: "可能感到呼吸困难" },
    { week: 32, size: "哈密瓜", sizeEmoji: "🍈", length: "42cm", babyActivity: "我的小指甲长好了，可以挠痒痒！", momTips: "准备待产包" },
    { week: 33, size: "菠萝", sizeEmoji: "🍍", length: "44cm", babyActivity: "我的骨头变硬了，但头还是软的方便出生！", momTips: "注意胎位" },
    { week: 34, size: "甜瓜", sizeEmoji: "🍈", length: "45cm", babyActivity: "我的肺快准备好了，等着呼吸第一口气！", momTips: "可能出现假性宫缩" },
    { week: 35, size: "蜜瓜", sizeEmoji: "🍈", length: "46cm", babyActivity: "我基本准备好了，就等着见妈妈！", momTips: "每周产检" },
    { week: 36, size: "长生菜", sizeEmoji: "🥬", length: "47cm", babyActivity: "我在往下移动，找出口呢！", momTips: "可能感到骨盆压力" },
    { week: 37, size: "冬瓜", sizeEmoji: "🍈", length: "48cm", babyActivity: "我足月啦，随时准备好见面！", momTips: "注意产兆" },
    { week: 38, size: "韭菜", sizeEmoji: "🥬", length: "49cm", babyActivity: "我在做最后的准备工作！", momTips: "随时准备去医院" },
    { week: 39, size: "小西瓜", sizeEmoji: "🍉", length: "50cm", babyActivity: "我准备好了，想见妈妈爸爸！", momTips: "保持放松心情" },
    { week: 40, size: "西瓜", sizeEmoji: "🍉", length: "51cm", babyActivity: "妈妈，我来啦！终于要见面了！", momTips: "宝宝随时会来，加油！" }
];

// 配置：设置末次月经日期（需要修改这里）
const lastPeriodDate = new Date('2025-12-01');

// 计算预产期（末次月经 + 280天）
const dueDate = new Date(lastPeriodDate);
dueDate.setDate(dueDate.getDate() + 280);

// 计算当前孕周
function getCurrentWeek() {
    const today = new Date();
    const diffTime = today - lastPeriodDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return Math.floor(diffDays / 7) + 1;
}

// 计算距离预产期天数
function getDaysLeft() {
    const today = new Date();
    const diffTime = dueDate - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// 更新页面显示
function updateDisplay() {
    const week = getCurrentWeek();
    const daysLeft = getDaysLeft();
    const weekData = weeksData[Math.min(week - 1, 39)];
    
    // 更新倒计时
    document.getElementById('daysLeft').textContent = Math.max(0, daysLeft);
    
    // 更新孕周
    document.getElementById('currentWeek').textContent = week;
    
    // 更新宝宝信息
    document.getElementById('sizeEmoji').textContent = weekData.sizeEmoji;
    document.getElementById('sizeText').textContent = weekData.size;
    document.getElementById('babyLength').textContent = weekData.length;
    document.getElementById('babyActivity').textContent = weekData.babyActivity;
    document.getElementById('momTips').textContent = weekData.momTips;
    
    // 更新进度条
    const progress = Math.min((week / 40) * 100, 100);
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = `${week}/40周 (${progress.toFixed(0)}%)`;
}

// 情话盲盒数据
const loveQuotes = [
    "遇见你之前，我没想过结婚；遇见你之后，我没想过别人。",
    "你是我这辈子最大的幸运，谢谢你愿意为我们的家付出。",
    "看着你的肚子一天天大起来，我的心也一天天更满。",
    "等宝宝出来，我要告诉ta，妈妈是世界上最勇敢的人。",
    "你辛苦了，但你笑起来的样子，比任何时候都美。",
    "我会努力成为一个好爸爸，就像你已经是最好的妈妈。",
    "每次感受到胎动，我都觉得这是世界上最神奇的事。",
    "谢谢你给了我一个家，一个完整的、温暖的家。",
    "你不只是我的老婆，你是我生命中最重要的人。",
    "等宝宝长大了，我要跟ta说，妈妈怀你的时候有多辛苦多伟大。",
    "我可能不太会说甜言蜜语，但我的心里全是你和宝宝。",
    "你就安心养胎，其他的事情交给我。",
    "想到我们三个人的未来，我就充满了力量。",
    "你是最美的孕妈妈，没有之一。",
    "我爱你，不只是今天，是每一天。",
    "宝宝一定很幸福，因为ta有你这样的妈妈。",
    "等你卸货了，我带你去吃所有你现在馋的东西！",
    "你的每一次不舒服，我都心疼。希望我能替你分担。",
    "我们的小家庭就要多一个成员了，好期待！",
    "老婆大人辛苦了，今晚想吃什么？我去买！"
];

// 刷新情话盲盒
function refreshLoveQuote() {
    const el = document.getElementById('loveBoxQuote');
    const idx = Math.floor(Math.random() * loveQuotes.length);
    el.style.opacity = '0';
    setTimeout(() => {
        el.textContent = `"${loveQuotes[idx]}"`;
        el.style.opacity = '1';
    }, 200);
}

// 页面加载时执行
document.addEventListener('DOMContentLoaded', function() {
    updateDisplay();
    refreshLoveQuote();
});
