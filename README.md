# React-aws-s3-excel

# Amazon S3 Setup
https://blog.devgenius.io/upload-files-to-amazon-s3-from-a-react-frontend-fbd8f0b26f5

# How to Upload Files With React
https://codefrontend.com/file-upload-reactjs/

# Setup With Server
--> Set Server with aws sdk
--> Create Bucket
--> Create policies according to requirements
--> Create IAM User
--> Assign Policy to the IAM User. For reference: https://youtu.be/Ro78zq62n7U
--> Create Secret Access Key in Security Credentials
--> Setup AWS IAM Credentials in the Server Side
--> Get Signed URL setup by AWS SDK when a request is set
--> Pass that Signed URL to the Client side
--> Send a PUT request from the Client Side on the Signed URL
--> The file has been uploaded to the AWS S3 Bucket!

# UPLOAD FILES FROM REACT TO AWS S3 IN 6 MINUTES
https://youtu.be/fXjU8jTjHB4

# S3 Uploading Excel File and Downloading it via SignedURL - Set Content-type
https://stackoverflow.com/questions/60102124/s3-uploading-excel-file-and-downloading-it-via-signedurl

# What is correct content-type for excel files?
https://stackoverflow.com/questions/2937465/what-is-correct-content-type-for-excel-files
# duplicate of:
https://stackoverflow.com/questions/4212861/what-is-a-correct-mime-type-for-docx-pptx-etc

# s3 bucket policy gives the error "Policy has invalid resource"
https://stackoverflow.com/questions/35189663/s3-invalid-resource-in-bucket-policy

The "Policy has invalid resource" error message usually indicates that the S3 bucket resource specified in the policy is incorrect or does not exist.
To resolve this issue, you can check and make sure that:

The bucket name is spelled correctly in the policy. The bucket is in the same region as the policy. The bucket you are trying to reference is created and exists in your AWS account. Also, you can check the bucket policy using the AWS Policy Generator. This is a tool that helps you to create policies for different AWS services, including S3. It allows you to create policies by selecting different options, such as who can access the bucket and what actions they can perform.

Additionally, you can check the syntax of your policy, it should be in JSON format and should be well-formed JSON. To validate JSON you can use any JSON validator tools available.

Please make sure that you have the correct permissions to create and modify S3 policies and also that you are using the correct ARN (Amazon Resource Name) of the S3 bucket in the policy.

# Fatal: refusing to merge unrelated histories

When you run the command git pull and you get the error message fatal: refusing to merge unrelated histories, it means that Git is preventing you from merging two branches that have completely different commit histories.

This error occurs when you are trying to merge a branch that you created from scratch (e.g. a new branch that you created locally) with a branch that already exists on the remote repository, but the two branches have no commits in common.

By default, Git is set up to only merge branches that have a common ancestor. This is to prevent accidental data loss when merging unrelated branches.

You can still merge these branches by using the --allow-unrelated-histories option, you can do this by running the command:
"git pull origin main --allow-unrelated-histories"


