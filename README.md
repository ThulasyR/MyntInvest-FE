# MyntInvest Project
 
  Frond end : https://github.com/ThulasyR/MyntInvest-FE/
  Back end : https://github.com/ThulasyR/Myntinvest-01.git

Installation and Configuration of React and Django with MYSQL DB
************************************************************************************************************************

1. Install Visual Studio Code for Development Tool - https://code.visualstudio.com/download
2. Install MySQL Installer Community-https://dev.mysql.com/downloads/installer/
(Windows (x86, 32-bit), MSI Installer	8.0.30	5.5M	)
3.Node JS install for React as front end - https://nodejs.org/en/download/
4. Install Python latest version - https://www.python.org/downloads/


************************************************************************************************************************
Check Terminal all installed:
Install npm script runner in VS Extension

************************************************************************************************************************
Microsoft Windows [Version 10.0.18362.145]
(c) 2019 Microsoft Corporation. All rights reserved.

C:\WINDOWS\system32>node -v
v16.16.0

C:\WINDOWS\system32>npm install -g create-react-app
C:\WINDOWS\system32>mkdir workspace
>cd workspace
>npx create-react-app first-app
npx browserslist@latest --update-db

npm install --save moment
npm install bootstrap
npm install --save jquery

****************************************************************************************************************************
To clear cache:npm cache clean --force
****************************************************************************************************************************

Django installation Procedure:
**************************************************************
PS E:\Thulasy\project_live_workspace> python
Python 3.10.6 (tags/v3.10.6:9c7b4bd, Aug  1 2022, 21:53:49) [MSC v.1932 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>> exit();
PS E:\Thulasy\project_live_workspace> python -m venv djangoEnv
PS E:\Thulasy\project_live_workspace> .\djangoEnv\Scripts\activate
(djangoEnv) PS E:\Thulasy\project_live_workspace> python -m pip install django
(djangoEnv) PS E:\Thulasy\project_live_workspace\Backend> pip install djangorestframework
(djangoEnv) PS E:\Thulasy\project_live_workspace\Backend> pip install django-cors-headers
(djangoEnv) PS E:\Thulasy\project_live_workspace\Backend> pip install pymysql
                  or   pip install mysqlclient
python -m pip install Pillow


TO REMOVE FAKE QUERY
python manage.py migrate --fake app_name zero
**************************************************************
RUN DJANGO app
**************************************************************
python manage.py makemigrations <app-name>
python manage.py migrate <app-name>
python manage.py runserver



************************************************************************************************************************
EMAIL Configuration:
https://exerror.com/smtplib-smtpauthenticationerror-username-and-password-not-accepted/
************************************************************************************************************************



      ID,
      MTUSER_ID,
      EMAIL,
      MODULE,
      CINV_SNO,
      CINV_MEMBER_NAME,
      CINV_MEMBER_POSITION,
      CINV_FB_LINK,
      CINV_INSTA_LINK,
      CINV_LINKEDIN_LINK,
      CINV_BIO,
      CINV_PROFILE_PIC,
      STATUS,
      COMMENTS,
      DESCRIPTION,
      CREATED_USER,
      CREATED_DATE,
      MODIFIED_USER,
      MODIFIED_DATE, 


    campinvestid
    