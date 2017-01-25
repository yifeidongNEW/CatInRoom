class SceneLoading extends egret.Sprite {

    /**
     * 文字进度显示
     */
    private loadingTextBar:egret.TextField;

    /**
     * 待执行的各项函数
     */
    private todolist:Array<Function>;

    /**
     * 当前执行到的索引
     */
    private nowlistIndex:number;

    /**
     * 构造函数
     * @param todolist 需要
     */
    public constructor(todolist:Array<Function>) {
        super();
        
        this.todolist = todolist;

        //this.Init();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.Init, this);
        //this.stage.$childAdded(this,1000);
    }

    /**
     * 初始化状态
     */
    private Init(){
        console.log("loading trigger")
        //计数器清零
        this.nowlistIndex = 0;
        //背景涂黑
        this.graphics.beginFill(0x000000);
        this.graphics.drawRect(0,0,this.stage.width,this.stage.height);
        this.graphics.endFill(); 
        //创建显示文字
        this.loadingTextBar = new egret.TextField();
        this.loadingTextBar.text = "loading... 0/" + this.todolist.length;
        this.loadingTextBar.textColor = 0xffffff;
        this.loadingTextBar.size = 48;
        this.loadingTextBar.x = 15;
        this.loadingTextBar.y = this.stage.height - 55;
        //开始执行各项事件
        this.startDoFunctions();
    }

    /**
     * 开始执行各项事件
    */
    private startDoFunctions(){
        if(this.todolist == null){
            return;
        }
        this.todolist.forEach(elementFunction => {
            elementFunction();
            this.functionDoEndCallback();
        });
    }

    /**
     * 执行完成每个，更新数值状态
    */
    private functionDoEndCallback(){
        this.nowlistIndex = this.nowlistIndex + 1;
        if(this.nowlistIndex == this.todolist.length){
            //执行完了，不再容器内显示
            this.stage.removeChild(this);
        }
        this.loadingTextBar.text = "loading... " + this.nowlistIndex + "/" + this.todolist.length;
    }
}