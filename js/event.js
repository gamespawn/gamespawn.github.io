var featured_event = events.find(event => event.path === featured_event_path);

Handlebars.registerHelper('prettydate', function(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
});

var featured_event_template = Handlebars.compile(
`

<div class="centered" id="masthead" style="background-image: url({{featured_event.bg_img}})">
<a href="{{featured_event.url}}">
  <div id="masthead-overlay">
    <div id="masthead-text">
      <div class="animate-left-in">
        <h2>{{featured_event.name}}</h2>

        <p>
          {{#if featured_event.regular_date}}
            {{featured_event.regular_date}}
          {{else if featured_event.date}}
            {{prettydate featured_event.date}} 
          {{else}}
            Date TBD
          {{/if}}
          
          {{#if featured_event.time}}
            , {{featured_event.time}}
          {{/if}}
        </p>

        <p>{{featured_event.location}}</p>
      </div>
    </div>
  </div>
  </a>
</div>

`
);

var events_container_template = Handlebars.compile(
`<div class="events-container">
{{#each events}}
<a href="{{this.url}}">
<div class="text-align-left event-item" style="background-image: url({{this.bg_img}})">
  <div class="event-item-overlay">
    <h3>{{this.name}}</h3>
    <div class="spacer-small"></div>
    <p>
      {{#if this.regular_date}}
        {{this.regular_date}}
      {{else if this.date}}
        {{prettydate this.date}} 
      {{else}}
        Date TBD
      {{/if}}
      
      {{#if this.time}}
        , {{this.time}}
      {{/if}}
    </p>
    
    <p>
    {{#if this.location}}
      {{this.location}}
    {{else}}
      Location TBD
    {{/if}}
    </p>
  </div>
</div>
</a>
{{/each}}
</div>`);

document.getElementById("masthead-container").innerHTML = featured_event_template({featured_event: featured_event});
document.getElementById("special-events-container").innerHTML = events_container_template({events: special_events});
document.getElementById("regular-events-container").innerHTML = events_container_template({events: regular_events});
