function Card({item,handleClick,id}) {
    const cardClass = item.stat ? " active " + item.stat : " ";
   return (
    <div className={'card' + cardClass} onClick={() => handleClick(id)}>
    <img src={item.image} />
    </div>
   )
}

export {Card}