/**
 * Created by jiexu on 2017/4/26.
 */
function getTreeData() {
    var tree = [
        {
            text: "工位1",
            icon: "fa fa-laptop",
            nodeType: "station",
            nodes: [
                {
                    text: "参考图 #1",
                    icon: "fa fa-image",
                    nodeType: "image",
                    nodes: [
                        {
                            text: "分组#1",
                            icon: "fa fa-sitemap",
                            nodeType: "group",
                            nodes: [
                                {
                                    text: "对象#1",
                                    icon: "fa fa-cube",
                                    nodes: [
                                        {
                                            text: "比对检测",
                                            icon: "fa fa-gear"
                                        }, {
                                            text: "区域#1",
                                            icon: "fa fa-pencil-square-o"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            text: "分组#2",
                            icon: "fa fa-sitemap",
                            nodeType: "group",
                            nodes: [
                                {
                                    text: "对象#2",
                                    icon: "fa fa-cube",
                                    nodes: [
                                        {
                                            text: "比对检测",
                                            icon: "fa fa-gear"
                                        }, {
                                            text: "区域#2",
                                            icon: "fa fa-pencil-square-o"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            text: "工位2",
            icon: "fa fa-laptop",
            nodeType: "station",
            nodes: [
                {
                    text: "参考图 #2",
                    icon: "fa fa-image",
                    nodeType: "image",
                    nodes: [
                        {
                            text: "分组#1",
                            icon: "fa fa-sitemap",
                            nodeType: "group",
                            nodes: [
                                {
                                    text: "对象#1",
                                    icon: "fa fa-cube",
                                    nodes: [
                                        {
                                            text: "比对检测",
                                            icon: "fa fa-gear"
                                        }, {
                                            text: "区域#3",
                                            icon: "fa fa-pencil-square-o"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];
    return tree;
}