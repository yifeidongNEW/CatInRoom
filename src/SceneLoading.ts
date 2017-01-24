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
     * 构造函数
     * @param todolist 需要
     */
    public constructor(todolist:Array<Function>) {
        super();
        
        this.todolist = todolist;

        this.Init();

        this.stage.$childAdded(this,1000);
    }

    private Init(){
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

    }

    //开始执行各项事件
    private startDoFunctions(){
        if(this.todolist == null){
            return;
        }
        this.todolist.forEach(elementFunction => {
            elementFunction();
            this.functionDoEndCallback();
        });
    }

    private functionDoEndCallback(){

    }

    public Show(){

    }
}