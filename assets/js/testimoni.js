class Testimonial {
    constructor(quote, image) {
        this._quote = quote
        this._image = image
    }

    get quote() {
        return this._quote
    }

    get image() {
        return this._image
    }

    get html() {
        return `<div class="testimonial">
            <img src="${this.image}" class="profile-testimonial" />
            <p class="quote">"${this.quote}"</p>
            <p class="author">- ${this.author}</p>
        </div>`
    }
}

class AuthorTestimonial extends Testimonial {
    constructor(author, quote, image) {
        super(quote, image)
        this._author = author
    }

    get author() {
        return this._author
    }
}

class CompanyTestimonial extends Testimonial {
    constructor(company, quote, image) {
        super(quote, image)
        this._company = company
    }

    get author() {
        return this._company + " Company"
    }
}

const testimonial1 = new AuthorTestimonial("25 HP SAMSUNG TERBARU", "Mantap, keren banget Desainnya", "assets/images/hp.jpg")

const testimonial2 = new AuthorTestimonial("KONDISI MUDIK LEBARAN 2023", "Macet tak tertahankan", "assets/images/mudik.jpeg")

const testimonial3 = new CompanyTestimonial("MUDIK GRATIS 2023","Mudik asik gratis coy", "assets/images/tiket.jpeg")

let testimonialData = [testimonial1, testimonial2, testimonial3]
let testimonialHTML = "";

for (let i = 0; i < testimonialData.length; i++) {
    testimonialHTML += testimonialData[i].html
}

document.getElementById("testimonials").innerHTML = testimonialHTML