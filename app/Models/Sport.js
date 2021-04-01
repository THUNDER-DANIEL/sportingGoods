export default class Sport {
    constructor(name, price, stock, description, imgUrl) {
        this.name = name 
        this.price = price
        this.stock = stock
        this.description = description
        this.imgUrl = imgUrl
    }    
    get Template() {

        return /*html*/`
      <div class = "col-4">
        <div class="card my-2" style="width: 18rem;">
          <img src="${this.imgUrl}">
          <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">${this.description}<BR> PRICE:$ ${this.price}</p>
           <p>Qty:${this.stock}</p>
            <a href="#" class="btn btn-primary" onclick="app.cartsController.addCart('${this.name}',${this.price})">Add to cart</a>
          </div>
        </div>
      </div>
                `
    }
    get cartTemplate(){
      return /*html*/`
      <p class="card-title">${this.name} $${this.price}</p>
\
      `
    }
  }