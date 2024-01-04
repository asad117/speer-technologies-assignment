function formatDateAndTime(dateTimeString) {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    const dateObject = new Date(dateTimeString);
    const formattedDate = dateObject.toLocaleDateString(undefined, options);
    let date =(formattedDate.split(' at '))[0]
    let time = (formattedDate.split(' at '))[1]
    console.log(date)
    return  {date,time} ;
  }

  export {formatDateAndTime}