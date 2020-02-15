---
title: "Devbox on spot instance"
date: 2020-02-15T17:37:24+01:00
draft: false
category: backend
summary: |
    Serverless solution to run development instances on spot instances.
---

I recently bought a [Microsoft Surface Go](https://en.wikipedia.org/wiki/Surface_Go), a 10-inch 2-in-1 detachable device. I wanted to have a device small and lightweight so that I could carry it everywhere, use it as an ebook reader and be able to code on it if I want to. In that sense, the Surface Go is an almost-perfect device for me: weighting only half a kilo and with a very small form factor, I can carry it everywhere, even when I need to carry my bulkier work laptop.

However, when it comes to coding, the underpowered Pentium Gold 4415Y can be pretty limiting. For compiled languages like Go, many modern IDEs will compile and run unit tests after every file save. This is a really nice feature, unless you have to wait a few seconds after every save just for the system to catch up.

Therefore, I needed a solution that would allow me to enjoy the portability in every day use, but give me more performance for the few hours per months when I need it. [Spot instances](https://aws.amazon.com/ec2/spot/) are very interesting in that regard: you leverage the unused compute capacity on AWS, as long as you accept that your instance might get turned off at any time with a two minutes notice. You can decide to stop the instance instead of terminating it during an interruption, and since January 2020, you can now [stop it an any time like an on-demand instance](https://aws.amazon.com/about-aws/whats-new/2020/01/amazon-ec2-spot-instances-stopped-started-similar-to-on-demand-instances/).

This meant that I could start a more powerful instance at any moment notice, turn it off when I don't need it and save money by leveraging [spot instances](https://aws.amazon.com/ec2/spot/pricing/). If my development instance gets interrupted, I could always make an API call to start it again.

## Architecture

![Architecture diagram](/img/devbox-spot/architecture.png)

The architecture consists of an [Amazon API Gateway](https://aws.amazon.com/api-gateway/) configured to accept only IAM credentials with two distinct paths: `/start` to start the instance and `/status` to retrieve the status of the instance, including the domain name to use to connect to it. When the instance starts or stops, it triggers events using [Amazon EventBridge](https://aws.amazon.com/eventbridge/). All these trigger [AWS Lambda functions](https://aws.amazon.com/lambda/) to perform the various required operations.

Optionally, you can configure a custom domain name for the instance, which will create a Route53 Hosted Zone. This is useful to persist the domain name, which prevents having to accept the instance's SSH fingerprint at every connection and makes it easier to configure it as a Visual Studio Code remote.

In total, there are four different Lambda functions, performing as such:

* __StartFunction__: starts the EC2 spot instance and authorize the caller's IP address to connect to the instance over SSH and perform ICMP requests.
* __StatusFunction__: describe the instance status.
* __OnRunFunction__: If a custom domain is configured, adds the instance IP address as an A record to the domain name. If there are no custom domain, this function is not deployed.
* __OnStopFunction__: Revoke permissions from the security group associated to the instance and, if a custom domain is configured, remove the records from the hosted zone.

If you want to explore the CloudFormation template or deploy it for yourself, you can find the source code for this project on [GitHub](https://github.com/nmoutschen/devbox-spot).