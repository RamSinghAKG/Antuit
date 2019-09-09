export const printTime = () => {
    let dt = new Date();
    const time = `${dt.getHours()} : ${dt.getMinutes()} : ${dt.getSeconds()} : ${dt.getMilliseconds()}`;
    console.log('time -> ', time);
};
