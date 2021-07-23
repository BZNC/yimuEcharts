//设备监控模块
(function () {
    $(".monitor .tabs").on("click", "a", function () {
        $(this).addClass("active").siblings("a").removeClass("active");
        $(".monitor .content").eq($(this).index()).show().siblings(".content").hide();
    });

    $(".marquee-view .marquee").each(function () {
        console.log($(this));
        var rows = $(this).children().clone();
        $(this).append(rows);
    });
})();


//点位分布统计模块
(function () {
    //实例化对象
    var myChatr = echarts.init(document.querySelector(".pie"))

    //指定配置项和数据
    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],

        series: [
            {
                name: '点位统计',
                type: 'pie',
                radius: ['10%', '70%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                data: [
                    { value: 20, name: '广东' },
                    { value: 26, name: '广西' },
                    { value: 24, name: '湖南' },
                    { value: 25, name: '江西' },
                    { value: 20, name: '云南' },
                    { value: 25, name: '贵州' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '湖北' }
                ],

                lable: {
                    fontSize: 10
                },
                // 引导线调整
                labelLine: {
                    // 连接扇形图线长
                    length: 4,
                    // 连接文字线长
                    length2: 3
                },
            }
        ]
    };

    //渲染数据
    myChatr.setOption(option)

    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChatr.resize();
    });
})();

//统计模块
(function () {

    var item = {
        name: "",
        value: 1200,
        // 1. 修改当前柱形的样式
        itemStyle: {
            color: "#254065"
        },
        // 2. 鼠标放到柱子上不想高亮显示
        emphasis: {
            itemStyle: {
                color: "#254065"
            }
        },
        // 3. 鼠标经过柱子不显示提示框组件
        tooltip: {
            extraCssText: "opacity: 0"
        }
    };



    var muChart = echarts.init(document.querySelector(".bar"));
    option = {
        tooltip: {
            trigger: 'item',
        },
        grid: {
            left: '0%',
            right: '3%',
            bottom: '3%',
            top: '3%',
            containLabel: true,
            show: true,
            borderColor: "rgba(0, 240, 255, 0.3)"
        },
        xAxis: [
            {
                type: 'category',
                data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                axisTick: {
                    alignWithLabel: false,
                    show: false
                },
                axisLabel: {
                    color: "#4c9bfd"
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(0, 240, 255, 0.3)"
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    alignWithLabel: false,
                    show: false
                },
                axisLabel: {
                    color: "#4c9bfd"
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(0, 240, 255, 0.3)"
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(0, 240, 255, 0.3)"
                    }
                }
            }
        ],


        color: new echarts.graphic.LinearGradient(
            // (x1,y1) 到 (x2,y2) 之间进行渐变
            0, 0, 0, 1,
            [
                { offset: 0, color: '#00fffb' }, // 0 起始颜色
                { offset: 1, color: '#0061ce' }  // 1 结束颜色
            ]
        ),

        series: [
            {
                name: '用户量统计',
                type: 'bar',
                barWidth: '60%',
                data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
            }
        ]
    };

    muChart.setOption(option);
})();

//销售统计模块
(function () {
    var mycharts1 = echarts.init(document.querySelector('.line'))

    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    },

        option = {
            tooltip: {
                trigger: 'axis'
            },

            legend: {
                right: '10%',
                textStyle: {
                    color: '#4c9bfd'
                },
            },
            grid: {
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                show: true,
                borderColor: "#012f4a",
                containLabel: true
            },

            xAxis: {
                type: 'category',
                axisTick: { show: false },
                axisLine: { show: false },
                axisLabel: { color: '#4c9bfd' },
                boundaryGap: false,
                data: [
                    "1月",
                    "2月",
                    "3月",
                    "4月",
                    "5月",
                    "6月",
                    "7月",
                    "8月",
                    "9月",
                    "10月",
                    "11月",
                    "12月"
                ],
            },
            yAxis: {
                type: 'value',
                axisTick: { show: false },
                axisLabel: { color: '#4c9bfd' },
                splitLine: {
                    lineStyle: {
                        color: '#012f4a' // 分割线颜色
                    }
                }
            },
            color: ['#00f2f1', '#ed3f35'],
            series: [
                {
                    name: '预期销售额',
                    type: 'line',
                    stack: '总量',
                    smooth: true,
                    data: data.year[0]
                },
                {
                    name: '实际销售额',
                    type: 'line',
                    smooth: true,
                    stack: '总量',
                    data: data.year[1]
                },
            ]
        };

    mycharts1.setOption(option);


    //tab栏切换功能
    $(".sales .caption").on("click", "a", function () {
        index = $(this).index() - 1;
        $(this)
            .addClass("active")
            .siblings("a")
            .removeClass("active");
        var arr = data[this.dataset.type];
        option.series[0].data = arr[0];
        option.series[1].data = arr[1];
        mycharts1.setOption(option);
    });

    var as = $(".sales .caption a");
    var index = 0;
    var timer = setInterval(function () {
        index++;
        if (index >= 4) index = 0;
        as.eq(index).click();
    }, 1000);

    $(".sales").hover(
        function () {
            clearInterval(timer);
        },
        function () {
            clearInterval(timer);
            timer = setInterval(function () {
                index++;
                if (index >= 4) index = 0;
                as.eq(index).click();
            }, 1000);
        }
    );
    window.addEventListener("resize", function () {
        mycharts1.resize();
    });
})();

// 销售渠道模块 雷达图
(function () {

    var myChart = echarts.init(document.querySelector(".radar"));

    var option = {
        tooltip: {
            show: true,
            position: ["60%", "10%"]
        },
        radar: {
            indicator: [
                { name: "机场", max: 100 },
                { name: "商场", max: 100 },
                { name: "火车站", max: 100 },
                { name: "汽车站", max: 100 },
                { name: "地铁", max: 100 }
            ],
            radius: "65%",
            shape: "circle",
            splitNumber: 4,
            name: {
                textStyle: {
                    color: "#4c9bfd"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255, 0.5)"
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255, 255, 255, 0.5)"
                }
            }
        },
        series: [
            {
                name: "渠道",
                type: "radar",
                lineStyle: {
                    normal: {
                        color: "#fff",
                        width: 1,
                        opacity: 0.5
                    }
                },
                data: [[90, 19, 56, 11, 34]],
                symbol: "circle",
                symbolSize: 5,
                itemStyle: {
                    color: "#fff"
                },
                label: {
                    show: true,
                    fontSize: 10
                },
                areaStyle: {
                    color: "rgba(238, 197, 102, 0.6)"
                }
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();



// 销售进度模块
(function () {
    var myChart = echarts.init(document.querySelector(".gauge"));
    var option = {
        series: [
            {
                name: "销售进度",
                type: "pie",
                radius: ["130%", "150%"],
                center: ["50%", "80%"],
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                startAngle: 180,
                hoverOffset: 0,
                data: [
                    {
                        value: 100,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    { offset: 0, color: "#00c9e0" },
                                    { offset: 1, color: "#005fc1" }
                                ]
                            )
                        }
                    },
                    {
                        value: 100,
                        itemStyle: {
                            color: "#12274d"
                        }
                    },
                    {
                        value: 200,
                        itemStyle: {
                            color: "transparent"
                        }
                    }
                ]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();




// 全国热榜模块
(function () {
    var hotData = [
        {
            city: "广东",
            sales: "25, 179",
            flag: true,
            brands: [
                //  品牌种类数据
                { name: "可爱多", num: "9,086", flag: true },
                { name: "娃哈哈", num: "8,341", flag: true },
                { name: "喜之郎", num: "7,407", flag: false },
                { name: "八喜", num: "6,080", flag: false },
                { name: "小洋人", num: "6,724", flag: false },
                { name: "好多鱼", num: "2,170", flag: true }
            ]
        },
        {
            city: "湖南",
            sales: "23,252",
            flag: false,
            brands: [
                { name: "可爱多", num: "3,457", flag: false },
                { name: "娃哈哈", num: "2,124", flag: true },
                { name: "喜之郎", num: "8,907", flag: false },
                { name: "八喜", num: "6,080", flag: true },
                { name: "小洋人", num: "1,724", flag: false },
                { name: "好多鱼", num: "1,170", flag: false }
            ]
        },
        {
            city: "江西",
            sales: "20,760",
            flag: true,
            brands: [
                { name: "可爱多", num: "2,345", flag: true },
                { name: "娃哈哈", num: "7,109", flag: true },
                { name: "喜之郎", num: "3,701", flag: false },
                { name: "八喜", num: "6,080", flag: false },
                { name: "小洋人", num: "2,724", flag: false },
                { name: "好多鱼", num: "2,998", flag: true }
            ]
        },
        {
            city: "广西",
            sales: "23,252",
            flag: false,
            brands: [
                { name: "可爱多", num: "2,156", flag: false },
                { name: "娃哈哈", num: "2,456", flag: true },
                { name: "喜之郎", num: "9,737", flag: true },
                { name: "八喜", num: "2,080", flag: true },
                { name: "小洋人", num: "8,724", flag: true },
                { name: "好多鱼", num: "1,770", flag: false }
            ]
        },
        {
            city: "福建",
            sales: "20,760",
            flag: true,
            brands: [
                { name: "可爱多", num: "9,567", flag: true },
                { name: "娃哈哈", num: "2,345", flag: false },
                { name: "喜之郎", num: "9,037", flag: false },
                { name: "八喜", num: "1,080", flag: true },
                { name: "小洋人", num: "4,724", flag: false },
                { name: "好多鱼", num: "9,999", flag: true }
            ]
        }
    ];

    // 渲染各省模块
    var supHTML = "";
    $.each(hotData, function (index, item) {
        // console.log(item);
        supHTML += `<li><span>${item.city}</span><span> ${item.sales} <s class=
    ${item.flag ? "icon-up" : "icon-down"}></s></span></li>`;
    });

    $(".sup").html(supHTML);

    $(".province .sup").on("mouseenter", "li", function () {
        index = $(this).index();
        render($(this));
    });

    function render(currentEle) {
        currentEle
            .addClass("active")
            .siblings()
            .removeClass();

        var subHTML = "";
        $.each(hotData[currentEle.index()].brands, function (index, item) {
            subHTML += `<li><span>${item.name}</span><span> ${item.num}<s class=
                ${item.flag ? "icon-up" : "icon-down"}></s></span></li>`;
        });

        $(".sub").html(subHTML);
    }

    var lis = $(".province .sup li");
    lis.eq(0).mouseenter();

    var index = 0;
    var timer = setInterval(function () {
        index++;
        if (index >= 5) index = 0;

        render(lis.eq(index));
    }, 2000);

    $(".province .sup").hover(

        function () {
            clearInterval(timer);
        },

        function () {
            clearInterval(timer);
            timer = setInterval(function () {
                index++;
                if (index >= 5) index = 0;

                render(lis.eq(index));
            }, 2000);
        }
    );
})();