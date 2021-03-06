import 'package:frontend/Classes/User.dart';
import 'package:json_annotation/json_annotation.dart';
part 'registrationModel.g.dart';

@JsonSerializable()
class registrationModel {
  registrationModel(
      this.EventID,
      this.attendeeName,
      this.contributor,
      this.platform,
      this.contributorName,
      this.contributorImage,
      this.contributorCore,
      this.contributorYOJ);

  factory registrationModel.fromJson(Map<String, dynamic> data) =>
      _$registrationModelFromJson(data);
  Map<String, dynamic> toJson() => _$registrationModelToJson(this);

  final String contributorName;
  final String contributorImage;
  final String contributorCore;
  final String contributorYOJ;
  final String EventID;
  final String attendeeName;
  final String contributor;
  final String platform;
}
