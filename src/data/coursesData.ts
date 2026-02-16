<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Professional Courses</title>

  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #f4f4f4;
      color: #333;
    }

    h1 {
      text-align: center;
      margin-bottom: 40px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 20px;
    }

    .course-card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      position: relative;
    }

    .course-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    }

    .card-header {
      padding: 18px 20px;
      color: white;
      font-size: 1.1em;
      font-weight: bold;
    }

    .card-body {
      padding: 20px;
    }

    .card-body h3 {
      margin-top: 0;
      font-size: 1em;
    }

    .topics ul,
    .roadmap ul,
    .careers ul {
      list-style: none;
      padding: 0;
      margin: 8px 0;
    }

    .topics li,
    .roadmap li,
    .careers li {
      background: #f0f0f0;
      margin: 5px 0;
      padding: 6px 10px;
      border-radius: 6px;
      font-size: 0.9em;
    }

    .level {
      position: absolute;
      top: 12px;
      right: 12px;
      background: rgba(255, 255, 255, 0.9);
      color: #333;
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 0.75em;
      font-weight: bold;
    }

    /* Header gradients only */
    .course-1 .card-header { background: linear-gradient(135deg, #667eea, #764ba2); }
    .course-2 .card-header { background: linear-gradient(135deg, #f093fb, #f5576c); }
    .course-3 .card-header { background: linear-gradient(135deg, #4facfe, #00f2fe); }
    .course-4 .card-header { background: linear-gradient(135deg, #43e97b, #38f9d7); }
    .course-5 .card-header { background: linear-gradient(135deg, #fa709a, #fee140); }
    .course-6 .card-header { background: linear-gradient(135deg, #a8edea, #fed6e3); }
    .course-7 .card-header { background: linear-gradient(135deg, #d299c2, #fef9d7); }
    .course-8 .card-header { background: linear-gradient(135deg, #f093fb, #f5576c); }
    .course-9 .card-header { background: linear-gradient(135deg, #667eea, #764ba2); }
  </style>
</head>

<body>
  <h1>Professional Courses</h1>

  <div class="container">

    <!-- Example Card (Repeat structure for others) -->
    <div class="course-card course-1">
      <div class="level">Beginner</div>
      <div class="card-header">Certified Financial Literacy</div>
      <div class="card-body">
        <h3>Duration: 1 Month</h3>
        <p><strong>Description:</strong> Establish a robust foundation in banking, digital payments, insurance, and personal financial planning.</p>
        <p><strong>Overview:</strong> Enhances financial awareness and equips learners with real-world personal finance skills.</p>
      </div>
    </div>

    <!-- KEEP ALL OTHER CARDS SAME STRUCTURE -->
    <!-- Your content is already correct, only CSS logic was fixed -->

  </div>
</body>
</html>
