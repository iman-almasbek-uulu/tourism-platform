import UseTranslate from "@/ui/Translate";


const Reviews = () => {
    const {t} = UseTranslate()
    
    const reviews = [
        {
            id: 1,
            name: 'John Doe',
            rating: 5,
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nulla vel purus tincidunt fermentum. Sed in turpis vel nunc tincidunt fermentum.' 
        },
    ]
}


export default Reviews;