var clock = new FlipClock($('.your-clock'), {

    clockFace: 'DailyCounter'
    // ... your options here
});
clock.setCountdown(true);
var eventDate = new Date('September 16, 2017 09:00:00 GMT-0700 (PDT)')
var date = new Date();
var diff = new Date(eventDate.getTime() - date.getTime());
var days = ((diff.getMonth())*30+(diff.getDate()))*60*60*24,
    hours = (diff.getHours())*60*60,
    minutes = (diff.getMinutes())*60,
    sec = diff.getSeconds();
clock.setTime(days+hours+minutes+sec);
