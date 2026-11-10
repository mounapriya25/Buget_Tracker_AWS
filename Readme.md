# Budget Tracker – AWS Cloud Deployment

A full-stack Budget Tracker application deployed on AWS using EC2, Application Load Balancer, Auto Scaling Groups, and Amazon CloudWatch.

The project demonstrates how to deploy, scale, distribute traffic, and monitor a web application using AWS cloud infrastructure.

## Architecture

```text
                 Users
                   |
                   v
       Application Load Balancer
                   |
              Target Group
                   |
          +--------+--------+
          |                 |
          v                 v
       EC2 Instance      EC2 Instance
          |                 |
        Nginx             Nginx
          |                 |
     React + Node.js   React + Node.js
          |                 |
          +--------+--------+
                   |
                   v
              MongoDB Atlas

       CloudWatch monitors EC2 logs
       Auto Scaling Group manages EC2 capacity
```

## Technology Stack

- **Frontend:** React.js, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js, PM2
- **Database:** MongoDB Atlas
- **Web Server:** Nginx
- **AWS:** EC2, VPC, IAM, Application Load Balancer, Target Groups, Auto Scaling Groups, Launch Templates, AMI, CloudWatch
- **Version Control:** Git, GitHub

## AWS Implementation

1. Created a custom VPC with two public subnets across two Availability Zones.
2. Launched EC2 and deployed the React frontend and Node.js backend.
3. Configured Nginx to serve the frontend and reverse-proxy API requests.
4. Integrated the backend with MongoDB Atlas.
5. Configured IAM roles and CloudWatch Agent for centralized log monitoring.
6. Created a custom AMI and Launch Template.
7. Configured an Auto Scaling Group with CPU-based target tracking.
8. Created an Application Load Balancer and Target Group.
9. Verified EC2 health checks, traffic distribution, and scaling behavior.

## Key Features

- Full-stack application deployment on AWS.
- Load balancing across healthy EC2 instances.
- Automatic EC2 scaling based on CPU utilization.
- Centralized application log monitoring using CloudWatch.
- Multi-AZ infrastructure deployment.

## Learning Outcomes

- AWS networking and EC2 deployment.
- Load balancing and Auto Scaling.
- IAM roles and permissions.
- CloudWatch monitoring and log management.
- Full-stack application deployment on cloud infrastructure.
