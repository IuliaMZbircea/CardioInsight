# CardioInsight 🫀📊

## Overview

CardioInsight is a web application designed to provide personalized recommendations to users based on their medical records. Leveraging machine learning, the platform predicts the risk of developing heart disease and offers lifestyle recommendations to mitigate these risks. The users can connect with professional medical specialists for virtual consultations directly through the platform. The telemedicine feature allows users to connect with cardiologists or any other relevant healthcare professionals for personalized advice and further assessment.

## Features

- **Health Risk Assessment:** Utilize a trained machine learning model to assess the user's risk of developing heart disease.
- **Data Visualization:** Visualize abnormal medical values through interactive charts and graphs.
- **Personalized Recommendations:** Offer tailored lifestyle recommendations to help users prevent heart diseases.
- **User Authentication:** Ensure privacy and secure access to individual medical records.

## Data Source -> CardioInsight/Dataset/frmgham2.csv

The model utilizes data from the Framingham Heart Study, consisting of 4,434 patients with a total of 11.628 observations. This dataset serves as the foundation for training the machine learning model.

### Dataframe Description:

- RANDID - Unique identification number for each participant (2448 - 9999312)
- SEX - Participant sex
  - 1 - Men (n = 5022)
  - 2 - Women (n = 6605)
- PERIOD - Examination Cycle
  - 1 = Period 1 (n = 4434)
  - 2 = Period 2 (n = 3930)
  - 3 = Period 3 (n = 3263)
- TIME - Number of days since baseline exam (0-4854)
- AGE - Age at exam (years) 32-81
- SYSBP - Systolic Blood Pressure as of mean of last two of three measurements (83.5 - 295 mmHg)
- DIABP - Diastolic Blood Pressure as of mean of last two of three measurements (30-150 mmHg)
- BPMEDS - Use of Anti-hypertensive medication at exam
  - 0 = Not currently used (n = 10090)
  - 1 = Current Use (n = 944)
- CURSMOKE - Current cigarette smoking at exam
  - 0 = Not current smoker (n = 6598)
  - 1 = Current smoker (n = 5029)
- CIGPDAY - Number of cigarettes smoked each day
  - 0 = Not current smoker
  - 1-90 cigarettes per day
- EDUC - Attained Education
  - 1 = 0-11 years
  - 2 = High School Diploma, GED
  - 3 = Some College, Vocational School
  - 4 = College (BS, BA) degree or more
- TOTCHOL - Serum Total Cholesterol (mg/dL) 107-696
- HDLC - High Density Lipoprotein Cholesterol (mg/dL) available for period 3 only 10-189
- LDLC - Low Density Lipoprotein Cholesterol (mg/dL) available for period 3 only 20-565
- BMI - Body Mass Index, weight in kilograms/height meters squared (14.43-56.8)
- GLUCOSE - Casual serum glucose (mg/dL) 39-478
- DIABETES - Diabetic according to criteria of first exam treated or first exam with casual glucose of 200 mg/dL or more
  - 0 = Not a diabetic (n = 11097)
  - 1 = Diabetic (n = 530)
- HEARTRTE - Heart rate (Ventricular rate) in beats/min (37-220)
- PREVAP - Prevalent Angina Pectoris at exam
  - 0 = Free of disease (n = 11000)
  - 1 = Prevalent disease (n = 627)
- PREVCHD - Prevalent Coronary Heart Disease defined as pre-existing Angina Pectoris, Myocardial Infarction (hospitalized, silent or unrecognized), or Coronary Insufficiency (unstable angina)
  - 0 = Free of disease (n = 10785)
  - 1 = Prevalent disease (n = 842)
- PREVMI - Prevalent Myocardial Infarction
  - 0 = Free of disease (n = 11253)
  - 1 = Prevalent disease (n = 374)
- PREVSTRK - Prevalent Stroke
  - 0 = Free of disease (n = 11475)
  - 1 = Prevalent disease (n = 152)
- PREVHYP - Prevalent Hypertensive. Subject was defined as hypertensive if treated or if second exam at which mean systolic was >=140 mmHg or mean Diastolic >=90 mmHg
  - 0 = Free of disease (n = 6283)
  - 1 = Prevalent disease (n = 5344)


For Each participant the following event data is provided. For each type of event, ‘0' indicates the event did not occur during followup, and ‘1' indicates an event did occur during followup. Only the first event occurring during the interval of baseline (PERIOD = 1) to end of followup is provided:

- ANGINA - Angina Pectoris
- HOSPMI - Hospitalized Myocardial Infarction
- MI_FCHD - Hospitalized Myocardial Infarction or Fatal Coronary Heart Disease
- ANYCHD - Angina Pectoris, Myocardial infarction (Hospitalized and silent or unrecognized), Coronary Insufficiency (Unstable Angina), or Fatal Coronary Heart Disease
- STROKE - Atherothrombotic infarction, Cerebral Embolism, Intracerebral Hemorrhage, or Subarachnoid Hemorrhage or Fatal Cerebrovascular Disease
- CVD - Myocardial infarction (Hospitalized and silent or unrecognized), Fatal Coronary Heart Disease, Atherothrombotic infarction, Cerebral Embolism, Intracerebral Hemorrhage, or Subarachnoid Hemorrhage or Fatal Cerebrovascular Disease
- HYPERTEN - Hypertensive. Defined as the first exam treated for high blood pressure or second exam in which either Systolic is >= 140 mmHg or Diastolic >= 90mmHg
- DEATH - Death from any cause
- TIMEAP - Number of days from Baseline exam to first Angina during the followup or Number of days from Baseline to censor date. Censor date may be end of followup, death or last known contact date if subject is lost to followup
- TIMEMI - Defined as above for the first HOSPMI event during followup
- TIMEMIFC - Defined as above for the first MI_FCHD event during followup
- TIMECHD - Defined as above for the first ANYCHD event during followup
- TIMESTRK - Defined as above for the first STROKE event during followup
- TIMECVD - Defined as above for the first CVD event during followup
- TIMEHYP - Defined as above for the first HYPERTEN event during followup
- TIMEDTH - Number of days from Baseline exam to death if occurring during followup or Number of days from Baseline to censor date. Censor date may be end of followup, or last known contact date if subject is lost to followup


## Incident Events
Frequently, epidemiologists need to define the population at risk for some disease or event outcome, and individuals who have previously had an event need to be excluded from the analysis so that only new or first events are counted. Incidence or first event rates can be calculated using any of the three examinations as a baseline exam. The variables PREVAP, PREVMI, PREVCHD, PREVSTRK, and PREVHYP will define the population at risk for the outcome of interest.
## Tech Stack ---> to be modified

- **Backend:** [Flask](https://flask.palletsprojects.com/)
- **Frontend:** Angular (HTML, CSS, TypeScript)
- **Machine Learning:** [Scikit-Learn](https://scikit-learn.org/), [TensorFlow](https://www.tensorflow.org/), or [PyTorch](https://pytorch.org/)
- **Data Visualization:** [Plotly](https://plotly.com/), [Matplotlib](https://matplotlib.org/), or [D3.js](https://d3js.org/)

## Usage ---> to be modified or detailed
User/Patient Registration/Login:

- Users must register and log in to access personalized recommendations.

- Users input their medical records or authorize access to existing records.

- Receive personalized risk assessment and lifestyle recommendations based on machine learning analysis.

User/Dr Pregistration/Login:

- Users must register and log in to access their assigned patients' data.

## Acknowledgements
Framingham Heart Study for providing the valuable dataset.

## Research Papers

1. Shah, D., Patel, S., & Bharti, S.K. (2020). Heart Disease Prediction using Machine Learning Techniques. *SN COMPUT. SCI.*, 1, 345. DOI: [10.1007/s42979-020-00365-y](https://doi.org/10.1007/s42979-020-00365-y)
2. Ramalingam, V. V., Dandapath, Ayantan, & Raja, M. Karthik. (2018). Heart disease prediction using machine learning techniques: a survey. *International Journal of Engineering & Technology*, 7(2.8), 684-687.
3. Fatima, Meherwar, and Maruf Pasha. (2017). Survey of machine learning algorithms for disease diagnostic. *Journal of Intelligent Learning Systems and Applications*, 9(01), 1-16.







