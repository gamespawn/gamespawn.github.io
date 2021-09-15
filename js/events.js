---
---

var featured_event = events.find(event => event.path === featured_event_path);

Handlebars.registerHelper('prettydate', function(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
});

var featured_event_template = Handlebars.compile(`{% include handlebars/event_featured.handlebars %}`);
var events_container_template = Handlebars.compile(`{% include handlebars/event_container.handlebars %}`);

document.getElementById("masthead-container").innerHTML = featured_event_template({featured_event: featured_event});
document.getElementById("special-events-container").innerHTML = events_container_template({events: special_events});
document.getElementById("regular-events-container").innerHTML = events_container_template({events: regular_events});