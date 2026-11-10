# Personal Budget Tracker – AWS Cloud Deployment

## Project Overview

A full-stack **Personal Budget Tracker** application that helps users manage their personal finances by tracking income, expenses, and transactions in one place.

Users can monitor their spending, organize financial records, and view their budget information through an interactive dashboard.

The application is deployed on **AWS** with load balancing, automatic scaling, and centralized monitoring.

## Application Features

- Track personal income and expenses.
- Add, view, and manage financial transactions.
- Monitor financial activities through a dashboard.
- Store and retrieve user data using MongoDB Atlas.
- React-based interactive user interface.

## Technology Stack

- **Frontend:** React.js, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js, REST APIs
- **Database:** MongoDB Atlas
- **Process Management:** PM2
- **Web Server:** Nginx
- **Cloud Platform:** AWS

## AWS Architecture

```text
             Users
               |
               v
    Application Load Balancer
               |
          Target Group
               |
       +-------+-------+
       |               |
       v               v
    EC2 Instance    EC2 Instance
       |               |
     Nginx           Nginx
       |               |
   React + Node.js  React + Node.js
       |               |
       +-------+-------+
               |
               v
          MongoDB Atlas

    Auto Scaling Group
    manages EC2 capacity

    CloudWatch monitors
    application logs
```

## AWS Services Implemented

- **VPC:** Custom networking with two public subnets across two Availability Zones.
- **EC2:** Hosts the frontend and backend application.
- **Nginx:** Serves React files and forwards API requests.
- **Application Load Balancer:** Distributes incoming traffic across healthy EC2 instances.
- **Auto Scaling Group:** Automatically adjusts EC2 capacity based on CPU utilization.
- **Launch Template & AMI:** Maintains consistent EC2 configurations.
- **IAM:** Manages permissions for AWS resources.
- **CloudWatch:** Collects and monitors application and server logs.

## Deployment Workflow

1. Created a custom VPC, subnets, and networking components.
2. Deployed the React frontend and Node.js backend on EC2.
3. Configured Nginx and PM2.
4. Integrated MongoDB Atlas.
5. Configured CloudWatch Agent for centralized logging.
6. Created a custom AMI and Launch Template.
7. Configured an Auto Scaling Group with CPU-based scaling.
8. Configured an Application Load Balancer and Target Group.
9. Tested application accessibility, health checks, traffic distribution, and scaling.

## Key Learning Outcomes

- Full-stack application development and AWS deployment.
- AWS networking and EC2 management.
- Load balancing and automatic scaling.
- IAM roles and permissions.
- Centralized monitoring using Amazon CloudWatch.
