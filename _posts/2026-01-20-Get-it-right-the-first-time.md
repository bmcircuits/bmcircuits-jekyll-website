---
title: Get it right the first time? or execute a prototype.
date: 2026-10-8
read_time: 5 min read
tags: [Process, Project management]
excerpt: Why I believe that getting a first prototype out the door quicker is better in the long run.
---

Have you spent months carefully designing a PCB, expecting the first prototype to come back perfect because you spent the extra time to repeatedly review it.... only to find that your first prototype had an issue that had to be fixed? This is a situation I have been in before.

<h2 align="center">Product development life cycle</h2>
<figure>
  <img src="{{ 'assets/projects/getting_it_right_the_first_time/V-Model.png' | relative_url }}" 
       alt="Description of the image">
       <figcaption>V-Model</figcaption>
</figure>

A typical electronic product development cycle looks something like:

**Requirements → Design → Development → Test → Acceptance**

The project starts with an idea, which is turned into high-level business requirements. These are then broken down into technical requirements by engineering, followed by schematic design, PCB layout, firmware development, mechanical, compliance, etc.

Once you're happy with the design, the boards are manufactured and tested against the requirements. If everything passes, the product moves on to stakeholder acceptance and hopefully shortly after released to sales. This sounds straightforward, but there is an important question:

### Should we really be trying to get everything right the first time?

## The "Get It Right the First Time" Argument

There is a lot of planning, engineering time and money involved in developing a product. So it makes sense to spend more time upfront to try to get the design right before manufacturing.

And if the design really is correct the first time, this is obviously the best approach.

But what happens when it isn't?

No matter how much time is spent reviewing requirements, schematics and PCB layouts, some problems simply aren't obvious until someone has the physical product in their hands.

Let's look at two approaches.

---

## Approach 1 — Get It Right the First Time

Assume a simplified project timeline:

|                                      |             Time: |
| ------------------------------------ | ----------------: |
| **Requirements:**                    |            1 week |
| **Design specifications:**           |            1 week |
| **Schematic design:**                |           3 weeks |
| **PCB layout:**                      |            1 week |
| **Production manufacturing:** &nbsp; | &nbsp;  4–6 weeks |
  
<!-- {:.mbtablestyle} -->
<p></p>
The design phase is intentionally given extra time upfront to make sure everything is correct.

The 100 production boards arrive after roughly **10–12 weeks**. Testing then takes say, another four weeks.
During testing, stakeholders identify a few improvements. For example, the wire terminals work correctly, but installers would find them much easier to use if they accepted a larger wire and were angled up at 45°.

It's not a critical issue, but it would be an easy change to make in a second PCB revision.

However, we're now roughly **14–16 weeks into the project** and already have 100 boards manufactured.

Do we really want to delay the product for another PCB revision?

Probably not.

The opportunity to improve the design is usually lost, or else the project is delayed and money is wasted. Typically I usually see the change gets pushed into a future product revision, which can become difficult if you have compliance activities involved and formal retesting is required... you'll only be further wasting money if the issue discovered during initial prototyping testing was later a deal breaker unbeknown to you at the time. Your sales data could also be affected with the initial batch not selling as well due to not having the chance to make a simple improvement on the design.

<!-- ### Timeline:

**week 1**     → Requirements complete  
**week 2**     → Specification complete  
**Week 6**     → PCB complete  
**week 10–12** → 100 production boards arrive  
**week 14–16** → Testing complete  
  
<p></p>
**Result:** Product is ready, but improvements discovered during testing may be deferred.  -->

---

## Approach 2 — Plan for a Second Revision

Instead of trying to make the first PCB perfect, we deliberately plan for an early prototype revision and speed up our initial development time.

The timeline could be as follows:

|                                     |          Time: |
| ----------------------------------- | -------------: |
| **Requirements:**                   |         1 week |
| **Design specifications:**          |         1 week |
| **Schematic design:**               | &nbsp; 2 weeks |
| **PCB layout:**                     |         1 week |
| **Prototype manufacturing:** &nbsp; |         1 week |
| **Hand assembly:**                  |          1 day |
  
<!-- {:.mbtablestyle}   -->
<p></p>

Instead of waiting 10–12 weeks for 100 production boards, we have 5–10 prototypes in our hands in roughly **5–6 weeks**.
Now the stakeholders can actually use the hardware.
The same four-week testing period follows, but this time the second revision was planned from the beginning.
Any problems or improvements found during testing can be added to the next Revision.

For example:

> "The wire terminals are difficult to use. Can we change the connector type?"  
> *– Yes. It will be included with Revision 1.*

Because the PCB already exists, the changes for Revision 1[^1] should be relatively quick to implement:
- **~1 week** to update the schematic and PCB
- **4–6 weeks** for the final production run

### Timeline

***week 1*** → Requirements complete  
***week 2*** → Specification complete  
***week 6*** → Prototype boards arrive  
***week 10*** → Testing and stakeholder feedback complete  
***week 11*** → Revision 1 complete  
***week 15-17*** → Production boards arrive  

The final product is therefore available in roughly **15–17 weeks**.

---

## The Important Difference

At first glance, the second approach might seem slower because we're deliberately planning for another PCB revision.

|                               | &nbsp; Get It Right First Time | &nbsp; Plan for Revision |
| ----------------------------- | :----------------------------: | :----------------------: |
| **First hardware available:** |          10–12 weeks           |        5–6 weeks         |
| **Stakeholder feedback:**     |          10–12 weeks           |      **5–6 weeks**       |
| **Testing complete:**         |          14–16 weeks           |        9–10 weeks        |
| **Final production:**         |          10–12 weeks*          |       15–17 weeks        |
  
**Assuming no significant issues are discovered.*

The second approach gets hardware into people's hands roughly 5–6 weeks earlier.
That means we start learning from the real product much earlier. And with product development that's one of the most crucial parts, most people don't know what they want.

If we were unlucky that a critical issue or mistake was found during the first PCB run that required a second revision, that would've delayed the project completion to over 19-21 weeks at least. We might have had to scrap the ~100 boards, if there wasn't a suitable fix.

Would you really be selling a product with traces cut and hook up wires applied around the board? Would these last resort fixes be reliable enough? 

The other thing to point out with moving faster while anticipating a second revision, is you're not really saving much time over the complete project timeline. Comparing 14-16 Weeks vs 15-17 weeks.

---

## Designing for Iteration

My argument isn't that we should rush through the design or deliberately produce a bad first revision.

It's that we should recognise that **some things can only be learned by building the product**.

You can spend another week reviewing the schematic.  
You can spend another week reviewing the PCB.  
You can have another design meeting.  

But none of these completely replace having a physical product in someone's hands.

Some issues only become obvious when:

An installer tries to connect a cable.  
A technician services the product.  
A user interacts with the interface.  
A stakeholder sees the physical product for the first time.  
A product is installed in its actual environment.  

The goal shouldn't always be "Get it right the first time." It may often be better to plan for a second revision from the start.

At BMCircuits, I always start with a *Rev 0*, anticipating a *Rev 1*.




[^1]: Counting or more accurately indexing starts at zero, PCB revision should always start at 0. therefore the "second" revision will be Revision 1.