---
title: "Gossip protocol"
date: 2020-01-03T13:48:00+01:00
draft: false
category: backend
summary: |
  Experimentations with gossip protocol and building highly available data stores.
---

I was reading research papers on different highly available, cloud native storage solutions, such as the [Dynamo paper](https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf), a colleague told me that *"you don't really understand computer science until you've written a distributed, scalable database"*.

Learning by doing is my favourite way of learning new things, so I decided to build a proof of concept of a distributed data store that leverages [gossip protocol](https://en.wikipedia.org/wiki/Gossip_protocol). In order to keep things simple and interesting, I settle on a few design requirements:

* __Just one piece of information__: This system was not going to support storing lots of items, but just a single string. The interesting bits are not in how the data is stored or how to change the data, but how that information propagates throughout the network.
* __Separate control plane__: In a gossip protocol network, nodes do not have complete knowledge of the nodes in the network, which allow to scale the network of nodes to potentially infinity. However, this creates two complex problems: bootstrapping and recovery from network partitions. To solve this, this system has controller nodes that ensure that the entire network is a [connected graph](https://en.wikipedia.org/wiki/Connectivity_(graph_theory)#Connected_graph).

You can find the repository alongside detailed explanation on how this work [on GitHub](https://github.com/nmoutschen/gossip).