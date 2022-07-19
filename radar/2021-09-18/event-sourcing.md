---
title: "Event Sourcing"
ring: assess
quadrant: techniques
featured: true
---

Event sourcing is an approach to thinking about persistent data where the primary record is a log of
all events that make updates. A traditional representation of the database state can be entirely
recreated by reprocessing this event log. Event sourcing’s benefits include strong auditing,
creation of a historic state, and replaying of events for debugging and analysis. Event sourcing has
been around for a while, but we think it is used much less than it should be.

Event Sourcing ensures that all changes to the application state are stored as a sequence of events.
Not only can we query these events, but we can also use the event log to reconstruct past states,
and as a foundation to automatically adjust the state to cope with retroactive changes.
Complementary to the capture of business meaningful events, the technique has positive implications
for analytics in driving greater customer insight.