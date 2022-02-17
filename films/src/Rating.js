function Rating({value}){
    const stars = Math.ceil(value/2);

    switch(stars){
        case 1 :
            return (<span>★☆☆☆☆</span>);
            break; 
        case 2 :
            return (<span>★★☆☆☆</span>);
            break;
        case 3 :
            return (<span>★★★☆☆</span>);
            break;   
        case 4 :
            return (<span>★★★★☆</span>);
            break;
        case 5 :
        return (<span>★★★★★</span>);
        break;
        default :
            return (<span>☆☆☆☆☆</span>);
            break;
    }
}

export default Rating;