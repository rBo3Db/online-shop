class MainModel {
getData(data) {
    return data;
}
getCartModel(data, i, j) {
    let goodForCart = data[i].goods[j];
    console.log(goodForCart)
    return [goodForCart];
}
}

export default MainModel;