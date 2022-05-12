export class Game {
    private total = 0;
    private booksvector: bookinfo[] = [];
    private discount: number[] = [100, 190, 270, 320, 375];

    buy(bookname: string, num: number){
        let flag = false;
        this.total += num;
        for( let i=0;i<this.booksvector.length;i++ ){
            if(this.booksvector[i].name == bookname){
                flag = true;
                this.booksvector[i].len += 1;
            }
        }
        if(flag == false){
            // let book = foo(bookname, num);
            // console.log("---------")
            this.booksvector.push(foo(bookname, num))
        }
    }
    get price(){
        let final_price = 0;
        // console.log(this.booksvector.length)
        let getbook = 0;
        let p_ = 0;
        for(let iter=0;iter<this.total;){
            p_ = 0;
            for(let i=0;i<this.booksvector.length;i++){
                if(this.booksvector[i].len > getbook){
                    p_ += 1;
                    iter += 1;
                }
            }
            final_price += this.discount[p_-1];
            getbook += 1;
        }

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

