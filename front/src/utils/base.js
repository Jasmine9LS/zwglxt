const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootx2t46/",
            name: "springbootx2t46",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootx2t46/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "绿植养护论坛管理系统"
        } 
    }
}
export default base
