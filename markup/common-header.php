<?php

$title = 'GZRP - GTA Online roleplay server';
$author = 'GZRP';
$domain = '/';
$metaDescription = 'GZRP - GTA Online roleplay server';
$assetPath = $domain.'assets/';
$socialShareImage = $assetPath.'bg-2.png';
$date = '2021-01-18T11:07:26+02:00'

?>
<!DOCTYPE html>
<html lang="en">
<head>

    <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png">
    <link rel="manifest" href="./manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="./ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo $title; ?></title>
    <meta name="author" content="<?php echo $author; ?>">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:domain" content="<?php echo $domain; ?>">
    <meta name="twitter:title" content="<?php echo $title; ?>">
    <meta name="twitter:text:description" content="<?php echo $metaDescription; ?>">
    <meta name="twitter:description" content="<?php echo $metaDescription; ?>">
    <meta name="twitter:image" content="<?php echo $socialShareImage; ?>">

    <meta property="og:title" content="<?php echo $title; ?>">
    <meta property="og:url" content="<?php echo $domain; ?>">
    <meta property="og:type" content="article">
    <meta property="og:description" content="<?php echo $metaDescription; ?>">
    <meta property="og:image" content="<?php echo $socialShareImage; ?>">
    <meta property="og:updated_time" content="<?php echo $date; ?>>">
    <meta property="article:modified_time" content="<?php echo $date; ?>">
    <meta name="description" content="<?php echo $metaDescription; ?>">

    <!-- Frontend -->
    <script defer src="build/runtime.js" type="module"></script>
    <script defer src="build/vendor.js" type="module"></script>
    <script defer src="build/main.js" type="module"></script>
    <link rel="stylesheet" type="text/css" href="./build/main.css">

</head>
<body>