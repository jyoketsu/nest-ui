/**
 * Created by jiexu on 2017/4/26.
 */
function getTreeData() {
    var tree = [
        {
            text: "工位1",
            icon: "fa fa-laptop",
            nodes: [
                {
                    text: "参考图 #1 <button type='button' class='btn btn-default btn-xs nestTreeButton captureImage'>" +
                    "<i class='fa fa-camera'></i>" +
                    "</button>",
                    icon: "fa fa-image"
                }
            ]
        },
        {
            text: "工位2",
            icon: "fa fa-laptop",
            nodes: [
                {
                    text: "参考图 #2 <button type='button' class='btn btn-default btn-xs nestTreeButton captureImage'>" +
                    "<i class='fa fa-camera'></i>" +
                    "</button>",
                    icon: "fa fa-image"
                }
            ]
        }
    ];
    return tree;
}