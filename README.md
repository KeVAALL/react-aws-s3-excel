# React-aws-s3-excel

# Amazon S3 Setup
https://blog.devgenius.io/upload-files-to-amazon-s3-from-a-react-frontend-fbd8f0b26f5

# UPLOAD FILES FROM REACT TO AWS S3 IN 6 MINUTES
https://youtu.be/fXjU8jTjHB4

# How to Upload Files With React
https://codefrontend.com/file-upload-reactjs/

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
