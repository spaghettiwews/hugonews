function get_post_age(postdate) {	
    let one_day=1000*60*60*24;
    let one_month=1000*60*60*24*30;
    let today = new Date().getTime();
    let age_string;

	let difference_ms = today - postdate;
    let age_days = Math.round(difference_ms/one_day);

    if (age_days == 1 ) {
        age_string = "Posted today"
    }
    else if (age_days < 30) {
        age_string = age_days + ' days ago';
    }
    else {
        let age_months = Math.round(difference_ms/one_month);
        age_string = age_months + ' months ago';
    }
    return age_string;
}

function update_post_age() {
    let items = document.getElementsByClassName('post_age');
    for (var item of items) {
      let postdate = Date.parse(item.getAttribute('pdate'));
      item.innerHTML = get_post_age(postdate);
    }
}

