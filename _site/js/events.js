var featured_event = events.find(event => event.path === featured_event_path);

Handlebars.registerHelper('prettydate', function(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
});

var featured_event_template = Handlebars.compile(`
{{#with featured_event}}
<div class="centered" id="masthead" style="background-image: url({{bg_img}})">
<a href="{{url}}">
  <div id="masthead-overlay">
    <div id="masthead-text">
      <div class="animate-left-in">
        <h2>{{name}}</h2>

        <p>
          {{#if regular_date}}
            {{regular_date}}
          {{else if date}}
            {{prettydate date}} 
          {{else}}
            Date TBD
          {{/if}}
          
          {{#if time}}
            , {{time}}
          {{/if}}
        </p>

        <p>{{location}}</p>
      </div>
    </div>
  </div>
  </a>
</div>
{{/with}}
`);
var events_container_template = Handlebars.compile(`
<div class="events-container">
{{#events}}
<a href="{{url}}">
<div class="text-align-left event-item" style="background-image: url({{bg_img}})">
  <div class="event-item-overlay">
    <h3>{{name}}</h3>
    <div class="spacer-small"></div>
    <p>
      {{#if regular_date}}
        {{regular_date}}
      {{else if date}}
        {{prettydate date}} 
      {{else}}
        Date TBD
      {{/if}}
      
      {{#if time}}
        , {{time}}
      {{/if}}
    </p>
    
    <p>
    {{#if location}}
      {{location}}
    {{else}}
      Location TBD
    {{/if}}
    </p>
  </div>
</div>
</a>
{{/events}}
</div>
`);

document.getElementById("masthead-container").innerHTML = featured_event_template({featured_event: featured_event});
document.getElementById("special-events-container").innerHTML = events_container_template({events: special_events});
document.getElementById("regular-events-container").innerHTML = events_container_template({events: regular_events});