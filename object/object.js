var Animal = function(name, sex) {
    this.name = name; //プロパティ
    this.sex = sex; //プロパティ
    //プロトタイププロパティにメソッドを追加
    Animal.prototype.toString = function() {
       window.alert(this.name + " " + this.sex);
    };
}
