<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mail</title>
</head>
<body>
    Dear <b>{{$candidate_name}}</b>
    {!! $recruiter->decline_email !!}
    <b><i>Best regard</i></b><br>      
    {!! $recruiter->signature !!}
</body>
</html>