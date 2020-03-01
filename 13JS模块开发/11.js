let user = "chen";
// 一般类作为默认导出
class Admin{
    static show(){}
};
export {Admin as default, user};