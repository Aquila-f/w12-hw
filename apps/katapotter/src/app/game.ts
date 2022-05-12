export class Game {
    // private _price = 0;
    private booksvector: bookinfo[] = [];
    private discount: number[] = [1, 0.95, 0.9, 0.8, 0.75];

    buy(bookname: string, num: number){
        let flag = false;
        for( let i=0;i<this.booksvector.length;i++ ){
            if(this.booksvector[i].name == bookname){
                flag = true;
                this.booksvector[i].len += 1;
            }
        }
        if(flag == false){
            // let book = foo(bookname, num);
            console.log("---------")
            this.booksvector.push(foo(bookname, num))
        }
    }
    get price(){
        let final_price = 0;
        console.log(this.booksvector.length)
        for( let i=0;i<this.booksvector.length;i++ ){
            final_price += this.booksvector[i].len * 100;
            console.log(this.booksvector[i].len)
            console.log(this.booksvector[i].name)
        }

        final_price = final_price * this.discount[this.booksvector.length-1];

        return final_price;
    }
}

interface bookinfo{
    name: string;
    len: number;
}

function foo(name_: string, len_: number): bookinfo { 
    return {
        name: name_,
        len: len_
    };
}

