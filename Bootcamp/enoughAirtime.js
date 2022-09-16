export default function enoughAirtime(projectedUsage, airtimeAvailable) {
  var airtimeUsage = projectedUsage.split(',');
  let totalAirtimeU = 0;
  var call = 1.88;
  var dataBundles = 12;
  var sms = 0.75;
  for (var i = 0; i < airtimeUsage.length; i++) {
    if (airtimeUsage[i].startsWith('call')) { totalAirtimeU += call }
    else if (airtimeUsage[i].startsWith('data')) { totalAirtimeU += dataBundles }
    else if (airtimeUsage[i].startsWith('sms')) { totalAirtimeU += sms }
  }
  const result = (totalAirtimeU > airtimeAvailable) ? 0 : airtimeAvailable - totalAirtimeU
  return 'R' + result.toFixed(2)
}